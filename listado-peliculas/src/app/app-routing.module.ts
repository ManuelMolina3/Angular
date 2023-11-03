import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';

const routes: Routes = [
 {path: 'home', component: MovieListComponent},
 {path:'', pathMatch:'full', redirectTo: 'home'},
 {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
