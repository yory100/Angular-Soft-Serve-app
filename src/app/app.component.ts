import { Component } from '@angular/core';
import { slideInAnimation } from './animations/route-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'Angular-Soft-Serve-app';
}
