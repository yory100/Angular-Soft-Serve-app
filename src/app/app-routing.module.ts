import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { DisplaySingleNoteComponent } from './components/display-single-note/display-single-note.component';


const routes: Routes =[
  { path: '', component: DisplayNotesComponent, data: {animation: 'home'}},
  { path: 'home', component: DisplayNotesComponent, data: {animation: 'home'}},
  { path: 'details/:id', component: DisplaySingleNoteComponent, data: {animation: 'details'}},
  { path: 'addnote', component: AddEditComponent, data: {animation: 'addnote'}},
  { path: 'editnote/:id', component: AddEditComponent, data: {animation: 'editnote'}},
  { path: '**', component: DisplayNotesComponent, data: {animation: 'home'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
