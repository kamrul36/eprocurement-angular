import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor( private fb: UntypedFormBuilder,private service:ServiceService) { }


  UserForm:UntypedFormGroup


  ngOnInit() {

    this.UserForm=this.fb.group({
     
      Email:[''],
      CompanyName:[''],
      CompanyCategory:[''],
      CompanyAddress:[''],
      Phone:[''],
      TradeLicenseNo:[''],
      Description:[''],
      ProductSpecification:[''],

    })
  }

  onSubmit(obj: any) {
    this.service.AddData(obj)
      .subscribe((data): any => {
        if (data) {
          alert('save Succesfully');
        }
        this.UserForm.reset();
      });
  }


}
