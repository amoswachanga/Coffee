import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewCupsComponent } from './view-cups/view-cups.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
