import { Component, OnInit } from '@angular/core';

import { Note } from "../../shared/note.model";
import { NoteService } from "../../services/note-service.service";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
  providers: [NoteService]
})
export class DisplayNotesComponent implements OnInit {

  notes: any = [];
  error:any;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getData().subscribe(
      data => this.notes = data,
      error => {this.error = error.message; console.log(error);}
    );
  }


}
