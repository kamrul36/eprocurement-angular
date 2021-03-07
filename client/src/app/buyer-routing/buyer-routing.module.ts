import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SubmissionComponent } from '../Supply/submission/submission.component';
import { DashboardComponent } from '../buyer/dashboard/dashboard.component';
import { CtenderComponent } from '../buyer/ctender/ctender.component';
import { BuyerComponent } from '../buyer/buyer.component';
import { PublishedTenderComponent } from '../buyer/published-tender/published-tender.component';
import { SupplierProfileComponent } from '../buyer/supplier-profile/supplier-profile.component';
import { BidListComponent } from '../buyer/bid-list/bid-list.component';
import { EmailComponent } from '../buyer/email/email.component';





export const BuyerRoutingModule: Routes = [

  {
    path: 'buyer', component: BuyerComponent,canActivate:[AuthGuard],
     children:
      [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'ctender', component: CtenderComponent },
        {path:'tenders',component:PublishedTenderComponent},
        {path:'Sprofile',component:SupplierProfileComponent},
        {path:'bid',component:BidListComponent},
        {path:'email',component:EmailComponent},
        {path:'**',redirectTo:'dashboard'}
      ]
  },
];

