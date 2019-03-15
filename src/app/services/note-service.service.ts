import { Injectable } from '@angular/core';
import { Note } from "../shared/note.model";
import axios from "axios";


@Injectable()

export class NoteService {

    // axios.defaults.baseURL = 'https://api.example.com';
    // axios.defaults.headers.post['Content-Type'] = 'application/json';
    

    constructor() { }

    private data: Note[] = [
    { title: 'Buy something', message: 'this is a sentence tralalalal 44' },
    { title: 'Buy something', message: 'this is a sentence tralalalal 44' },
    { title: 'Buy something', message: 'this is a sentence tralalalal 44' },
    { title: 'Buy something', message: 'this is a sentence tralalalal 44' },
    ];

    getData(): Note[] {
        
        return this.data;
    }

    addData( id: number, title: string, message: string ){
        
        this.data.push( new Note( title, message) );
    }
}