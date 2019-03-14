import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './components/display-single-note/display-single-note.component';


const routes: Routes =[
  { path: '', component: DisplayNotesComponent},
  { path: 'home', component: DisplayNotesComponent},
  { path: 'details/:id', component: DisplaySingleNoteComponent},
  { path: 'addnote', component: AddEditComponent},
  { path: 'editnote/:id', component: AddEditComponent},
  { path: '**', component: DisplayNotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
