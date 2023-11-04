import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { PageHomeComponent } from './ui/page-home/page-home.component';
import { PageDetailsComponent } from './ui/page-details/page-details.component';

const routes: Routes = [
 {path: 'home', component: PageHomeComponent},
 {path: 'details/:id', component: PageDetailsComponent},
 {path:'', pathMatch:'full', redirectTo: 'home'},
 {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
