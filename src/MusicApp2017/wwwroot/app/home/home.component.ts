import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'index',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    public artists: Artist[];
    public albums: Album[];
    public genres: Genre[];
    constructor(http: Http) {
        http.get('/api/artistsapi').subscribe(result => {
            this.artists = result.json();
        });
        http.get('/api/albumsapi').subscribe(result => {
            this.albums = result.json();
        });
        http.get('/api/genresapi').subscribe(result => {
            this.genres = result.json();
        });
    }
    
}
interface Artist {
    artistID: number;
    name: string;
    bio: string;
    albums: string;
}
interface Genre {
    genreID: number;
    name: string;
    albums: string;
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