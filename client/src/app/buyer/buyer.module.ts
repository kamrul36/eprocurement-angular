import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import{BuyerRoutingModule}from '../buyer-routing/buyer-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CtenderComponent } from './ctender/ctender.component';
import { BuyerServiceService } from './buyer-service.service';
import { BuyerComponent } from './buyer.component';
import { PublishedTenderComponent } from './published-tender/published-tender.component';
import { SupplierProfileComponent } from './supplier-profile/supplier-profile.component';
import { BidListComponent } from './bid-list/bid-list.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
   
   DashboardComponent,
    CtenderComponent,
    BuyerComponent,
    PublishedTenderComponent,
    SupplierProfileComponent,
    BidListComponent,
    EmailComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(BuyerRoutingModule),
  ],
  providers:[BuyerServiceService],
})
export class BuyerModule { }
