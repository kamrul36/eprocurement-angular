import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{BuyerServiceService}from '../buyer-service.service';


@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.scss']
})
export class SupplierProfileComponent implements OnInit {

  constructor(private buyerservice:BuyerServiceService,private route:Router) { }

  ngOnInit() {
    this.buyerservice.getProfile();

  }

  ondelete(id:number){
    if(confirm('Are you sure Delete This Record!')){
      this.buyerservice.DeleteProfile(id)
    }
  };



}
