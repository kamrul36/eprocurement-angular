import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';
import 'rxjs';
import{Tender}from '../buyer/Tender';
import{Profile}from './Model/Profile';
import{Bidder}from './Model/Bidder';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BuyerServiceService {

readonly  RootUrl='http://localhost:42876/';

tender:Tender[];
profile:Profile[];
bid:Bidder[];


  constructor( private http:HttpClient,private router:Router) { }

  submit(tdata){
   return this.http.post(this.RootUrl+ 'api/Tender/Addtender',tdata);  
  }


  bidderlist(){
    return this.http.get(this.RootUrl+'api/SubmitGoods/GetGoods')
    
    .toPromise().then(res=>this.bid=res as Bidder[]);
  }
  
  getTenders() {  
    return this.http.get(this.RootUrl+'api/Tender/Getenders')
    
    .toPromise().then(res=>this.tender=res as Tender[]);
  }
  
  getProfile(){
    return this.http.get(this.RootUrl+'api/Profile/GetProfiles')
    .toPromise().then(res=>this.profile=res as Profile[]);
    
  }
  // DeleteTender(TenderId:String):Observable<number>{
  //   let httpHeaders =new HttpHeaders()
  //   .set('Content-Type','application/json');
  //   return this.http.delete<number>(this.RootUrl+'/'+TenderId);
  // }

  DeleteProfile(id:number){
 return this.http.delete(this.RootUrl+'api/Profile/DeleteProfile'+id);
  }



}
