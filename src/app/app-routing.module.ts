import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AstraComponent } from './astra/astra.component';
import { HashLocationStrategy } from '@angular/common';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  {
    path : 'astra',
    component: AstraComponent,
  },
  {
    path : 'astra/privacy-policy',
    component: PdfViewerComponent,
  },
  {
    path: '',
    component : HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
