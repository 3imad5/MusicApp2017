"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
require("rxjs/Rx");
var SearchPipeAlbum = (function () {
    function SearchPipeAlbum() {
    }
    SearchPipeAlbum.prototype.transform = function (albums, searchTerm) {
        searchTerm = searchTerm.toUpperCase();
        return albums.filter(function (album) {
            return (album.title.toUpperCase().indexOf(searchTerm) !== -1 || album.artist.name.toUpperCase().indexOf(searchTerm) !== -1 || album.genre.name.toUpperCase().indexOf(searchTerm) !== -1);
        });
    };
    return SearchPipeAlbum;
}());
SearchPipeAlbum = __decorate([
    core_1.Pipe({
        name: 'searchPipeAlbum',
        pure: false
    })
], SearchPipeAlbum);
exports.SearchPipeAlbum = SearchPipeAlbum;
var SearchPipeArtist = (function () {
    function SearchPipeArtist() {
    }
    SearchPipeArtist.prototype.transform = function (artists, searchTerm) {
        searchTerm = searchTerm.toUpperCase();
        return artists.filter(function (artist) {
            return (artist.name.toUpperCase().indexOf(searchTerm) !== -1 || artist.bio.toUpperCase().indexOf(searchTerm) !== -1);
        });
    };
    return SearchPipeArtist;
}());
SearchPipeArtist = __decorate([
    core_1.Pipe({
        name: 'searchPipeArtist',
        pure: false
    })
], SearchPipeArtist);
exports.SearchPipeArtist = SearchPipeArtist;
var SearchPipeGenre = (function () {
    function SearchPipeGenre() {
    }
    SearchPipeGenre.prototype.transform = function (genres, searchTerm) {
        searchTerm = searchTerm.toUpperCase();
        return genres.filter(function (genre) {
            return (genre.name.toUpperCase().indexOf(searchTerm) !== -1);
        });
    };
    return SearchPipeGenre;
}());
SearchPipeGenre = __decorate([
    core_1.Pipe({
        name: 'searchPipeGenre',
        pure: false
    })
], SearchPipeGenre);
exports.SearchPipeGenre = SearchPipeGenre;
//# sourceMappingURL=searchpipe.js.map