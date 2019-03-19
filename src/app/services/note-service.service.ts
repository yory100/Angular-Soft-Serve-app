import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Note } from "../shared/note.model";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
}


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

    getSingleNotes( id: number ): Observable<Note> {
        return this.http.get<Note>( this.notesUrl + '/' + id );
    }

    postEdited( note: Note ): Observable<any> {
        const url = `${this.notesUrl}/${note.id}`
        return this.http.put(url, note, httpOptions);
    }

    deleteNote( note: Note ): Observable<Note>{
        const url = `${this.notesUrl}/${note.id}`
        return this.http.delete<Note>(url, httpOptions);
    }
}