import { Component, OnInit } from '@angular/core';
import { BuyerServiceService } from '../buyer-service.service';

@Component({
  selector: 'app-bid-list',
  templateUrl: './bid-list.component.html',
  styleUrls: ['./bid-list.component.scss']
})
export class BidListComponent implements OnInit {

  constructor(private buyerservice:BuyerServiceService) { }

  ngOnInit() {
    this.buyerservice.bidderlist();
  }

}
