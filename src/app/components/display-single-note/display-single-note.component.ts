import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Note } from '@app/shared/note.model';
import { NoteService } from "../../services/note-service.service";

@Component({
  selector: 'app-display-single-note',
  templateUrl: './display-single-note.component.html',
  styleUrls: ['./display-single-note.component.css']
})
export class DisplaySingleNoteComponent implements OnInit {

  id: number;
  textNote: Note;
  error:any;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private noteService: NoteService 
  ){     
      this.id = activateRoute.snapshot.params['id'];
  }

  

  ngOnInit() {
    this.noteService.getSingleNotes( this.id ).subscribe(
      data => this.textNote = data ,
      error => { this.error = error.message; console.log(error); }
    );
  }

  onDelete( note: Note ) {
    this.noteService.deleteNote( note ).subscribe(
      data => this.router.navigate(['/home']),
      error => { this.error = error.message; console.log(error); }
    );
  }

}
