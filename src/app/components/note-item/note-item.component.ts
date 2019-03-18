import { Component, OnInit, Input } from '@angular/core';
import { Note } from '@app/shared/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

  onDelete( note: Note ) {
    console.log( note );
  }

}
