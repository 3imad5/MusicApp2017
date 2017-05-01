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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var GenreListComponent = (function () {
    function GenreListComponent(http) {
        var _this = this;
        http.get('/api/genresapi').subscribe(function (result) {
            _this.genres = result.json();
        });
    }
    GenreListComponent.prototype.ngOnInit = function () {
        var eventObservable = Observable_1.Observable.fromEvent(this.input.nativeElement, 'keyup');
        eventObservable.subscribe();
    };
    return GenreListComponent;
}());
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], GenreListComponent.prototype, "input", void 0);
GenreListComponent = __decorate([
    core_1.Component({
        selector: 'genrelist',
        templateUrl: './genrelist.component.html',
    }),
    __metadata("design:paramtypes", [http_1.Http])
], GenreListComponent);
exports.GenreListComponent = GenreListComponent;
//# sourceMappingURL=genrelist.component.js.map