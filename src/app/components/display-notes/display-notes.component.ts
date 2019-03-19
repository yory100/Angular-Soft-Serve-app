import { Component, OnInit } from '@angular/core';

import { Note } from "../../shared/note.model";
import { NoteService } from "../../services/note-service.service";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
})
export class DisplayNotesComponent implements OnInit {

  notes: Note[];
  error:any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes().subscribe(
      data => this.notes = data,
      error => {this.error = error.message; console.log(error);}
    );
  }

  deleteNote( note: Note ) {
    event.preventDefault();
    this.notes = this.notes.filter( t => t.id !== note.id ); // Delete from UI
    this.noteService.deleteNote( note ).subscribe(); // Delete from server
  }


}
