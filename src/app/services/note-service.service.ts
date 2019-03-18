import { Injectable } from '@angular/core';
import { Note } from "../shared/note.model";
import {HttpClient} from '@angular/common/http';
import axios from "axios";


@Injectable()

export class NoteService {
    
    constructor(
        private http: HttpClient
    ) { }

    getData() {

        return this.http.get('http://localhost:3000/posts')
    }

}