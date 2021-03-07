import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  submitForm:FormGroup;


  ngOnInit() {
    this.submitForm=this.fb.group({
      From:[''],
      To:[''],
      Subject:[''],
      Description:['']
    })
  }

  onSubmit(){
    console.log(this.submitForm.value);
  }

}
