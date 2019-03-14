import { Component, OnInit } from '@angular/core';

import { Note } from "../../shared/note.model";

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css']
})
export class DisplayNotesComponent implements OnInit {
  notes: Note[] = [
    new Note( 1, 'Buy something', 'this is a sentence tralalalal 44' ),
    new Note( 2, 'Buy something 1', 'this is a sentence tralalalal 55' ),
    new Note( 3, 'Buy something 2', 'this is a sentence tralalalal fds dfsf fgfdg gfhgfhfg  ggf' ),
    new Note( 4, 'Buy something 3', 'this is a sentence tralalalal fgh hgfghfh hfghgfh hgfhgfh' )
  ];

  constructor() { }

  ngOnInit() {
  }

}
