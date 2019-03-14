import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-display-single-note',
  templateUrl: './display-single-note.component.html',
  styleUrls: ['./display-single-note.component.css']
})
export class DisplaySingleNoteComponent implements OnInit {

  id: number;
  constructor(private activateRoute: ActivatedRoute){
       
      this.id = activateRoute.snapshot.params['id'];
  }

  

  ngOnInit() {
  }

}
