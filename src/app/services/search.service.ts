import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    //Observable native source
    private navSearchSource = new Subject<string>();

    //Observable native stream
    navitem$ = this.navSearchSource.asObservable();

    changeNav( searchText: string ){
        this.navSearchSource.next(searchText);
    }

}

