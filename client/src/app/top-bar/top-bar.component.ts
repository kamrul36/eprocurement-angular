import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '.././Shared/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    private router: Router,
    private service: UserService
    ) { }

  isUserOptionShow = false;

  register = ['hello dear', 'how are you?', 'hi there!']


  ngOnInit() {
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.service.token = null;
    this.router.navigate(['']);
  }

  // isAuthenticated() {
  //   return this.service.token !== null;
  // }

  onUserOptionShow() {
    this.isUserOptionShow = !this.isUserOptionShow;
  }
}
