import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'addalbum',
    templateUrl: './addalbum.component.html'
})

export class AddAlbumComponent {

    model: Album = new Album();
    postResponse: Object;

    constructor(private http: Http) { }

    onSubmit(form: NgForm) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this.http.post('/api/albumsapi', JSON.stringify(this.model), { headers: headers }).subscribe(res => this.postResponse = res.json());
    }
}

class Album {
    constructor(private albumID: number = 0,
        public title: string = null,
        public artist: string = null,
        public genre: string = null

    ) { }
}