import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './display-single-note/display-single-note.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
