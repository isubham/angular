import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  socials : any;
  apiService : ApiService;
  uiData : any;

  constructor(apiService : ApiService) 
  {
    this.apiService = apiService;
  }

  ngOnInit() 
  {
    this.socials = this.apiService.getSocials();
    this.uiData = this.apiService.getHomeUiData();
  }



}
