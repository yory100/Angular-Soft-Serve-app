import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";

import { Note } from "../../shared/note.model";
import { NoteService } from "../../services/note-service.service";
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
})
export class DisplayNotesComponent implements OnInit, OnDestroy {

  notes: Note[];
  error:any;
  searchTerm: string;

  subscription: Subscription;
  subscriptionDelete: Subscription;
  subscriptionSearch: Subscription;

  constructor(
    private noteService: NoteService,
    private searchService: SearchService
    ) { }

  ngOnInit() {

    this.subscription = this.noteService.getNotes().subscribe(
      data => this.notes = data,
      error => {this.error = error.message; console.log(error);}
    );

    this.getSearchValue();
  }

  getSearchValue(){
    this.subscriptionSearch = this.searchService.navitem$.subscribe(
      item => this.searchTerm = item,
      err => {this.error = err; console.log( this.error );}
    )
  }

  deleteNote( note: Note ) {
    event.preventDefault();
    this.notes = this.notes.filter( t => t.id !== note.id ); // Delete from UI
    // Delete from server
    this.subscriptionDelete = this.noteService.deleteNote( note ).subscribe(
      data => this.subscriptionDelete.unsubscribe(),
      error => {this.error = error.message; console.log(error);}
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
