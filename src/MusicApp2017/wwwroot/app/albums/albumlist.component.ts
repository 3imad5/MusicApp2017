import { Component, Pipe, PipeTransform, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'albumslist',
    templateUrl: './albumlist.component.html',
})
export class AlbumListComponent {
    @ViewChild('input')
    input: ElementRef;
    public albums: Album[];

    constructor(http: Http) {
        http.get('/api/albumsapi').subscribe(result => {
            this.albums = result.json();
        });
    }
    ngOnInit() {
        let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup')
        eventObservable.subscribe();
    }
}
interface Album {
    albumID: number;
    title: string;

    artistID: number;
    artist: string;

    genreID: number;
    genre: string;

    ratings: string;
}