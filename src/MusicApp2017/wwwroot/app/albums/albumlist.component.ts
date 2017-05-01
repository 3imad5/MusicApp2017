import { Component, Pipe, PipeTransform, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'albumslist',
    templateUrl: './albumlist.component.html',
    styles: [`
    #search{
        
    }

  `],
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
@Pipe({
    name: 'searchPipe',
    pure: false
})
export class SearchPipe implements PipeTransform {
    transform(albums: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return albums.filter(album => {
            return (album.title.toUpperCase().indexOf(searchTerm) !== -1 || album.artist.name.toUpperCase().indexOf(searchTerm) !== -1 || album.genre.name.toUpperCase().indexOf(searchTerm) !== -1)
        });
    }
}