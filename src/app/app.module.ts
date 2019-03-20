import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './components/display-single-note/display-single-note.component';
import { NoteService } from "./services/note-service.service";
import { SearchService } from "./services/search.service";
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteFilter } from './pipes/note-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayNotesComponent,
    AddEditComponent,
    DisplaySingleNoteComponent,
    NoteItemComponent,
    NoteFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NoteService, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
