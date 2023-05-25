import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  OnSubmit(userName, password) {
    this.userService.OnSubmit(userName, password);
    // this.router.navigate(['/d']);
  }



}
