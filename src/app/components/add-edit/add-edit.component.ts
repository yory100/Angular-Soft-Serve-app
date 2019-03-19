import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Note } from '@app/shared/note.model';
import { NoteService } from "../../services/note-service.service";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  id: number;
  note: Note;
  error:any;

  title: string;
  message: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {

    //If editing existing note - load existing note data to form
    if( this.id ) { 
      this.noteService.getSingleNotes( this.id ).subscribe(
        data => {
          this.note = data;
          this.title = data.title;
          this.message = data.message;
        },
        error => { this.error = error.message; console.log(error); }
      ); 
    }
  }

  
  onSubmit():void { 
    const textNote = {
      title: this.title,
      message: this.message
    }
    if( textNote ){
      if ( this.id ) {
        this.note.title = this.title;
        this.note.message = this.message;    
        //Updating existing notes
        this.noteService.postEdited( this.note ).subscribe(
          data => this.router.navigate(['/home']),
          error => { this.error = error.message; console.log(error); }
        );
      }else{
        // adding new notes
        this.noteService.addNote( textNote ).subscribe(
          data => this.router.navigate(['/home']), //if adding note succesfull redirect to home page
          error => { this.error = error.message; console.log(error); }
        );
      }
    }
  }

}
