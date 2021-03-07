import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupplyRoutingModule } from '../supply-routing/supply-routing.module';
import {SupplierComponent}from '../supplier/supplier.component';
import{SubmissionComponent}from '../submission/submission.component';
import{StenderComponent}from '../stender/stender.component';
@NgModule({
  declarations: [
 
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
 RouterModule.forChild(SupplyRoutingModule),
  ]
})
export class SupplyModule { }
