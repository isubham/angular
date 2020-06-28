import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-astra',
  templateUrl: './astra.component.html',
  styleUrls: ['./astra.component.css']  
})
export class AstraComponent implements OnInit {

  apiService  : ApiService;
  features : any;
  socials : any;
  uiData : any;

  constructor(apiService : ApiService) 
  {
    this.apiService = apiService;
    this.uiData
  }

  ngOnInit() 
  {
    this.features = this.apiService.getFeatures();
    this.socials = this.apiService.getSocials();
    this.uiData = this.apiService.getAstraUiData();
  }

}
