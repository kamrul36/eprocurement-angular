import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { TenderComponent } from './tender/tender.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { BuyerComponent } from './buyer/buyer.component';
import{UserService}from './Shared/user.service';
import{AuthGuard}from './auth/auth.guard';
import {SupplierComponent}from './Supply/supplier/supplier.component';
import { StenderComponent } from './Supply/stender/stender.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TenderDetailComponent } from './tender-detail/tender-detail.component';
import { SupplyModule } from './Supply/supply/supply.module';
import { SubmissionComponent } from './Supply/submission/submission.component';
import { ProfileComponent } from './Supply/profile/profile.component';
import { ServiceService } from './Supply/service.service';
import { ProfileListComponent } from './Supply/profile-list/profile-list.component';
import { ReversePipe } from './about/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    TenderComponent,
    HomeDetailsComponent,
    
    SupplierComponent,
    NotificationComponent,
    AboutComponent,
    TopBarComponent,
    TenderDetailComponent,
    SubmissionComponent,
    StenderComponent,
    ProfileComponent,
    ProfileListComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  
  ],
  providers: [UserService,AuthGuard,ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
