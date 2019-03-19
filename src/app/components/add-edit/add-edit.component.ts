import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Note } from '@app/shared/note.model';
import { NoteService } from "../../services/note-service.service";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  id: number;
  textNote: Note;
  error:any;

  title: string;
  message: string;

  //model = new Note(18, 'Dr IQ', 'Chuck Overstreet');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(
    private activateRoute: ActivatedRoute,
    private noteService: NoteService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }



  // this.noteService.postEdited( this.textNote ).subscribe(
  // note => console.log( note )
  // );
  //noteService.postAdded( this.textNote );

  ngOnInit() {
    if( this.id ) { 
      this.noteService.getSingleNotes( this.id ).subscribe(
        data => this.textNote = data ,
        error => { this.error = error.message; console.log(error); }
      ); 
    }
  }

}
