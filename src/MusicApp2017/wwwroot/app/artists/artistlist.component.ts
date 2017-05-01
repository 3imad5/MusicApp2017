import { Component, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'artistlist',
    templateUrl: './artistlist.component.html',
})
export class ArtistListComponent {
    @ViewChild('input')
    input: ElementRef;
    public artists: Artist[];

    constructor(http: Http) {
        http.get('/api/artistsapi').subscribe(result => {
            this.artists = result.json();
        });
    }
    ngOnInit() {
        let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
        eventObservable.subscribe();
    }
}
interface Artist {
    artistID: number;
    name: string;
    bio: string;
    albums: string;
}