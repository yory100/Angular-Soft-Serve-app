import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { SingleNoteComponent } from './display-notes/single-note/single-note.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './display-single-note/display-single-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayNotesComponent,
    SingleNoteComponent,
    AddEditComponent,
    DisplaySingleNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
