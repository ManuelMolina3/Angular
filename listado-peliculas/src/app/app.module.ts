import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieItemComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
