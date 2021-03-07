import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router';
import{BuyerServiceService}from '../buyer-service.service';
import{ReversePipe}from '../../about/reverse.pipe';


@Component({
  selector: 'app-published-tender',
  templateUrl: './published-tender.component.html',
  styleUrls: ['./published-tender.component.scss']
})
export class PublishedTenderComponent implements OnInit {


  constructor(private Buyerservice:BuyerServiceService,private route:Router) { }

  ngOnInit() {
    this.Buyerservice.getTenders();  
}

}
