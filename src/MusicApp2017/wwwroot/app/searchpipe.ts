import { Pipe, PipeTransform, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Pipe({
    name: 'searchPipeAlbum',
    pure: false
})
export class SearchPipeAlbum implements PipeTransform {
    transform(albums: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return albums.filter(album => {
            return (album.title.toUpperCase().indexOf(searchTerm) !== -1 || album.artist.name.toUpperCase().indexOf(searchTerm) !== -1 || album.genre.name.toUpperCase().indexOf(searchTerm) !== -1)
        });
    }
}
@Pipe({
    name: 'searchPipeArtist',
    pure: false
})
export class SearchPipeArtist implements PipeTransform {
    transform(artists: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return artists.filter(artist => {
            return (artist.name.toUpperCase().indexOf(searchTerm) !== -1 || artist.bio.toUpperCase().indexOf(searchTerm) !== -1)
        });
    }
}
@Pipe({
    name: 'searchPipeGenre',
    pure: false
})
export class SearchPipeGenre implements PipeTransform {
    transform(genres: any[], searchTerm: string): any[] {
        searchTerm = searchTerm.toUpperCase();
        return genres.filter(genre => {
            return (genre.name.toUpperCase().indexOf(searchTerm) !== -1)
        });
    }
}
