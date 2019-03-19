import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from '@app/shared/note.model';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {

  @Input() note: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete( note: Note ) {
    this.deleteNote.emit( note );
  }

}
