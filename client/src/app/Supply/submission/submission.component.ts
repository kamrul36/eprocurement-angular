import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup,FormArray, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {

  submitForm: FormGroup;
  multiple_Good = false;
  

  constructor( private fb: FormBuilder,private service:ServiceService) { }

  ngOnInit() {
    this.submitForm= this.fb.group({
      TenderRefNumber:[''],
      TenderTitle:[''],
      Goods: this.fb.array([this.ProductGroup()]),
      TotalPrice:['']
     

    })
  }
  ProductGroup(){
    return this.fb.group({
      GoodsName:[''],
      quentity:[''],
      Price:['']
      
    });
  }

  get Goods(){
    return this.submitForm.get('Goods') as FormArray;
  }

  addGoods() {
    this.Goods.push(this.ProductGroup());
    if(this.Goods.length>1){
          this.multiple_Good=true;
        }
  }


removeGoods(index) {
  this.Goods.removeAt(index);
  if (this.Goods.length <= 1) {
    this.multiple_Good = false;
  }
}


  onSubmit(obj:any){
    console.log(this.submitForm.value);
  
 this.service.Fsubmit(obj)
 .subscribe((data):any=>{
   if(data){
     alert('Submit Sucessfully');
   }
   this.submitForm.reset();
 })
    
  }

}
