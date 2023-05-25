import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Interface } from '../tender/interface';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  view: Interface[];
  interface: Interface[];
  isLoginError = false;
  token = null;

  rootUrl = 'http://localhost:42876/';
  getTenderApi = this.rootUrl + 'api/Interface/InterfaceTenders';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(user: User) {
    const body: User = {
      FirstName: user.FirstName,
      LastName: user.LastName,
      UserName: user.UserName,
      Email: user.Email,
      Password: user.Password
    };
    const reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    // console.log(body);
    return this.http.post(this.rootUrl + 'api/auth/register', body);
  }

  userAuthentication(userName, password): Observable<any> {
    const data = { 'username': userName, 'password': password };
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + 'api/auth/login', data, { headers: reqHeader });

  }

  OnSubmit(userName, password) {
    this.userAuthentication(userName, password)
      .subscribe((data: any) => {
        this.token = data.token;
        // console.log(this.token);
        localStorage.setItem('userToken', data.access_token);
        // console.log();
        // this.router.navigate(['/admin/buyer']);
        this.router.navigate(['/supply']);
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


  getInterface(): Observable<any> {
    return this.http.get<any[]>(this.getTenderApi);

    // .toPromise().then(res => this.interface = res as Interface[]);
  }


  getView(TenderId: string): Observable<Interface> {
    return this.http.get<Interface>
      (this.getTenderApi + TenderId);

    // .toPromise().then(res => this.view = res as Interface[]);
  }

  getData(url): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

}
