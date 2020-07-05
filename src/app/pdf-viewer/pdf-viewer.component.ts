import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.css']
})
export class PdfViewerComponent implements OnInit {

  pdfPaths : any;
  apiService : ApiService;
  router : Router;

  constructor(apiSerice : ApiService, router : Router) 
  { 
    this.apiService = apiSerice;
    this.router = router;
  }

  ngOnInit() {
    this.pdfPaths = this.apiService.getPrivacyPolicy()[this.router.url];
  }

}
