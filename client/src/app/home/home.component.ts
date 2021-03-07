import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import {UserService}from '.././Shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {
    // console.log(this.service.token);
  }



}
