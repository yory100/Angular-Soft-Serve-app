import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './components/display-single-note/display-single-note.component';
import { NoteService } from "./services/note-service.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayNotesComponent,
    AddEditComponent,
    DisplaySingleNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
