"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var nav_component_1 = require("./nav/nav.component");
var albumlist_component_1 = require("./albums/albumlist.component");
var home_component_1 = require("./home/home.component");
var album_component_1 = require("./albums/album.component");
var addalbum_component_1 = require("./albums/addalbum.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, http_1.JsonpModule, forms_1.FormsModule, router_1.RouterModule.forRoot([
                { path: '', redirectTo: 'index', pathMatch: 'full' },
                { path: 'albumlist', component: albumlist_component_1.AlbumListComponent },
                { path: 'albumlist/:id', component: album_component_1.AlbumComponent },
                { path: 'addalbum', component: addalbum_component_1.AddAlbumComponent },
                { path: 'index', component: home_component_1.HomeComponent },
                { path: '**', redirectTo: 'index' }
            ])],
        declarations: [
            app_component_1.AppComponent,
            nav_component_1.NavComponent,
            albumlist_component_1.AlbumListComponent,
            album_component_1.AlbumComponent,
            addalbum_component_1.AddAlbumComponent,
            home_component_1.HomeComponent,
            albumlist_component_1.SearchPipe
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map