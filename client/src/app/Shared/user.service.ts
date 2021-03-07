import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Interface } from '../tender/interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  view:Interface[];
  interface: Interface[];
  isLoginError: boolean = false;
  token = null;

  readonly rootUrl = 'http://localhost:42876/';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: User) {
    const body: User = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password
    }
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    // console.log(body);
    return this.http.post(this.rootUrl + 'api/auth/register', body);
  }

  userAuthentication(userName, password) {
    var data = { "username": userName, "password": password };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + 'api/auth/login', data, { headers: reqHeader });

  }

  OnSubmit(userName, password) {
    this.userAuthentication(userName, password).subscribe((data: any) => {
      this.token = data.token;
      // console.log(this.token);
      localStorage.setItem('userToken', data.access_token);
      // console.log();
       this.router.navigate(['/admin/buyer']);
       //this.router.navigate(['/supply']);
    },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      });



    // getUserClaims(){
    //  return  this.http.get(this.rootUrl+'/api/GetUserClaims');
    // }
  }

  isAuthenticated() {
    return this.token !== null;
  }


  getInterface() {
    return this.http.get(this.rootUrl + 'api/Interface/InterfaceTenders')

      .toPromise().then(res => this.interface = res as Interface[]);
  }


  getView(TenderId:string):Observable<Interface> {
    return this.http.get<Interface>
    (this.rootUrl + 'api/Interface/InterfaceTender'+TenderId);

      // .toPromise().then(res => this.view = res as Interface[]);
  }

  getData(url): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

 

}
