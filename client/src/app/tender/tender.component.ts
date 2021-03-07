import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import{UserService}from '../Shared/user.service';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {

  constructor( private userservice:UserService,private route:Router) { }



  ngOnInit() {
    this.getInterface();

  }


getInterface(){
  this.userservice.getInterface();
}

}
