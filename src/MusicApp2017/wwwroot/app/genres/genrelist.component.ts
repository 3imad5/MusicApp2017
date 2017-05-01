import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'genrelist',
    templateUrl: './genrelist.component.html',
})
export class GenreListComponent {
    @ViewChild('input')
    input: ElementRef;
    public genres: Genre[];

    constructor(http: Http) {
        http.get('/api/genresapi').subscribe(result => {
            this.genres = result.json();
        });
    }
    ngOnInit() {
        let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
        eventObservable.subscribe();
    }
}
interface Genre {
    genreID: number;
    name: string;
    albums: string;
}