import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onSearch(event: any):void {
    this.searchText = event.target.value;
    console.log( this.searchText )
  }

}
