import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from "../shared/note.model";


@Injectable({
    providedIn: 'root'
})

export class NoteService {

    notesUrl: string = 'http://localhost:3000/posts';
    
    constructor(
        private http: HttpClient
    ) { }

    getNotes(): Observable<Note[]> {

        return this.http.get<Note[]>( this.notesUrl );
    }

}