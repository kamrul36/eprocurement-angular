import { Component, OnInit } from '@angular/core';
import{Location}from '@angular/common';

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BuyerServiceService } from '../buyer-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ctender',
  templateUrl: './ctender.component.html',
  styleUrls: ['./ctender.component.css']
})
export class CtenderComponent implements OnInit {

  constructor(private buyerservice: BuyerServiceService,
    
    private fb: FormBuilder) { }

  tenderForm: FormGroup
  formPage = 1;
  multiple_Good = false;

  ngOnInit() {

    this.tenderForm = this.fb.group({
      TenderRefNumber: [''],
      TenderTitle:[''],
      TenderType: this.fb.group({
        ProcurementType: ['']
      }),
      TenderCategory: this.fb.group({
        CategoryType: ['']
      }),
      BeginDate: [''],
      EndDate: [''],
      DocumentUpdload: [''],
      PaymentType: [''],
      AllowReSubmission: [''],
      IsActive: [''],
      ContactType: [''],
      Location: [''],
      // Goods:this.fb.array([]),
      productList: this.fb.array([this.ProductGroup()]),
      BidOpeningDate: [''],
      BidClosingDate: [''],
      Status: this.fb.group({
        StatusType: [''],
      }),
      pTotalCost:['']
    })

    this.buyerservice.getTenders()
  }

  ProductGroup() {
    return this.fb.group({
      ProductTitle: [],
      ProductName: [],
      Quantity: [],
      Discription: [],
      ProductCategory: []
    });
  }

  get ProductArray() {
    return <FormArray>this.tenderForm.get('productList');
  }

//   get Goods(){
//     return this.tenderForm.get('Goods') as FormArray;
//   }
  
// addGoods(){
//   this.Goods.push(this.fb.control(''));
//   if(this.Goods.length>1){
//     this.multiple_Good=true;
//   }
// }

// removeGoods(index) {
//   this.Goods.removeAt(index);
//   if (this.Goods.length <= 1) {
//     this.multiple_Good = false;
//   }
// }

  onSubmit(obj: any) {
    this.buyerservice.submit(obj)
      .subscribe((data): any => {
        if (data) {
          alert('save Succesfully');
        }
        this.tenderForm.reset();
      });
  }

  changePage(pageNumber: number) {
    this.formPage = pageNumber;
    window.scrollTo(0, 0);
  }




  
}
