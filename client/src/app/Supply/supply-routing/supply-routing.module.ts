import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import{SupplierComponent}from '../supplier/supplier.component';
import { SubmissionComponent } from '../submission/submission.component';
import{StenderComponent}from '../stender/stender.component';
import { AuthGuard } from 'src/app/auth/auth.guard';


export const SupplyRoutingModule :Routes =[

//   { 
//     path: 'supply', component: SupplierComponent,canActivate:[AuthGuard],
//   children:
//   [
//   { path: 'sumbit', component: SubmissionComponent },
//   {path:'tender',component:StenderComponent},
//   ]
// },
];
