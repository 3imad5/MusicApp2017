"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var AlbumListComponent = (function () {
    function AlbumListComponent(http) {
        var _this = this;
        http.get('/api/albumsapi').subscribe(function (result) {
            _this.albums = result.json();
        });
    }
    AlbumListComponent.prototype.ngOnInit = function () {
        var eventObservable = Observable_1.Observable.fromEvent(this.input.nativeElement, 'keyup');
        eventObservable.subscribe();
    };
    return AlbumListComponent;
}());
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], AlbumListComponent.prototype, "input", void 0);
AlbumListComponent = __decorate([
    core_1.Component({
        selector: 'albumslist',
        templateUrl: './albumlist.component.html',
        styles: ["\n    #search{\n        \n    }\n\n  "],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AlbumListComponent);
exports.AlbumListComponent = AlbumListComponent;
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (albums, searchTerm) {
        searchTerm = searchTerm.toUpperCase();
        return albums.filter(function (album) {
            return (album.title.toUpperCase().indexOf(searchTerm) !== -1 || album.artist.name.toUpperCase().indexOf(searchTerm) !== -1 || album.genre.name.toUpperCase().indexOf(searchTerm) !== -1);
        });
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    core_1.Pipe({
        name: 'searchPipe',
        pure: false
    })
], SearchPipe);
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=albumlist.component.js.map