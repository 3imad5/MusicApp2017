import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AlbumListComponent } from './albums/albumlist.component';
import { ArtistListComponent } from './artists/artistlist.component';
import { GenreListComponent } from './genres/genrelist.component';
import { ArtistComponent } from './artists/artist.component';
import { HomeComponent } from './home/home.component';
import { AlbumComponent } from './albums/album.component';
import { AddAlbumComponent } from './albums/addalbum.component';
import { SearchPipeAlbum, SearchPipeArtist, SearchPipeGenre } from './searchpipe';
@NgModule({
    imports: [BrowserModule, HttpModule, JsonpModule, FormsModule, RouterModule.forRoot([
        { path: '', redirectTo: 'index', pathMatch: 'full' },
        { path: 'albumlist', component: AlbumListComponent },
        { path: 'albumlist/:id', component: AlbumComponent },
        { path: 'addalbum', component: AddAlbumComponent },
        { path: 'artistlist', component: ArtistListComponent },
        { path: 'artistlist/:id', component: ArtistComponent },
        { path: 'genrelist', component: GenreListComponent },
        { path: 'index', component: HomeComponent },
        { path: '**', redirectTo: 'index' }

    ])],
  declarations: [
      AppComponent,
      NavComponent,
      AlbumListComponent,
      AlbumComponent,
      AddAlbumComponent,
      ArtistListComponent,
      ArtistComponent,
      GenreListComponent,
      HomeComponent,
      SearchPipeAlbum,
      SearchPipeArtist,
      SearchPipeGenre
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
