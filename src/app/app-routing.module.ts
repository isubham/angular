import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'projects',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'blog',
    loadChildren: './staff/staff.module#StaffModule'
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
