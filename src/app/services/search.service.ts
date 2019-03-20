import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SearchService {

    //Observable native source
    private navSearchSource = new BehaviorSubject<string>(null);

    //Observable native stream
    navitem$ = this.navSearchSource.asObservable();

    changeNav( searchText: string ){
        this.navSearchSource.next(searchText);
    }

}
