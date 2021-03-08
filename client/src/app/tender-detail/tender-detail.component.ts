import { Component, OnInit } from '@angular/core';
import{UserService}from '../Shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tender-detail',
  templateUrl: './tender-detail.component.html',
  styleUrls: ['./tender-detail.component.scss']
})
export class TenderDetailComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private userservice: UserService) { }


  // detailBox = {
  //   Title: '',
  //   Category: '',
  //   Description: '',
  //   Type:'',
  //   TenderBeginDate: '',
  //   TenderSubmitEndDate: '',
  // };


 view = [];
id: string;

  ngOnInit() {
    
    
    
    
    //   console.log(this.id = this.route.snapshot.params['id']);

  // const url = 'http://localhost:42876/api/Interface/InterfaceTenders' + this.id;



  // this.userservice.getData(url)
  // .subscribe(
  //   (data: any) => {
  //     console.log('hello', data)
  //     this.detailBox.Title = data[0].result.tenderTitle;
  //     this.detailBox.Category = data[0].result.category;
  //     this.detailBox.Description = data[0].result.description;
  //     this.detailBox.Type = data[0].result.type;
  //     this.detailBox.TenderBeginDate = data[0].result.tenderBeginDate;
  //     this.detailBox.TenderSubmitEndDate = data[0].result.tenderSubmitEndDate;
  //   },
  //   (error) => console.log(error)
  // );

  // this.getDetail();
  }

  

getDetail(){
  this.userservice.getView('1')
  .subscribe((res: any) => {
    this.view = res;
  })
}

}
