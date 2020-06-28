import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AstraComponent } from './astra/astra.component';

const routes: Routes = [
  {
    path : 'astra',
    component: AstraComponent
  },
  {
    path: '',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
