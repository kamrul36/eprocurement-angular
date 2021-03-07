import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{map} from 'rxjs/operators';
import 'rxjs';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import{Tender}from '../buyer/Tender';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  tender:Tender[];

readonly  RootUrl='http://localhost:42876/';

  constructor(private http:HttpClient,private router:Router) { }

  AddData(tdata){
    return this.http.post(this.RootUrl+ 'api/Profile/AddProfile',tdata);  
   }

   Fsubmit(fdata){
    return this.http.post(this.RootUrl+ 'api/SubmitGoods/AddGood',fdata);  
   }

   getTender() {  
    return this.http.get(this.RootUrl+'api/Tender/Getenders')
    
    .toPromise().then(res=>this.tender=res as Tender[]);
  }
  

}
