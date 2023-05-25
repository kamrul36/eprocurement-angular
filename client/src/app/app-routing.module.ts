import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './User/sign-in/sign-in.component';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { TenderComponent } from './tender/tender.component';
import { HomeDetailsComponent } from './home-details/home-details.component';
import { BuyerComponent } from './buyer/buyer.component';
import { AuthGuard } from './auth/auth.guard';
import { SupplierComponent } from './Supply/supplier/supplier.component';
import { NotificationComponent } from './notification/notification.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './buyer/dashboard/dashboard.component';
import { TenderDetailComponent } from './tender-detail/tender-detail.component';
import { SubmissionComponent } from './Supply/submission/submission.component';
import { StenderComponent } from './Supply/stender/stender.component';
import { ProfileComponent } from './Supply/profile/profile.component';
import { ProfileListComponent } from './Supply/profile-list/profile-list.component';

const routes: Routes = [

  // {path:'',redirectTo:'/login',pathMatch:'full'},

  { path: '', component: HomeDetailsComponent },
  { path: 'login', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'tender', component: TenderComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tenderDetail/:id', component: TenderDetailComponent },

  {
    path: 'admin', loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule),
    canActivate: [AuthGuard]
  },

  {
    path: 'supply', component: SupplierComponent, canActivate: [AuthGuard],
    children:
      [
        { path: 'sumbit', component: SubmissionComponent },
        { path: 'stender', component: StenderComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'View', component: ProfileListComponent }
      ]
  },



  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
