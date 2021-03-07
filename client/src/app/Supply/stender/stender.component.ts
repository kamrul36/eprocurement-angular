import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-stender',
  templateUrl: './stender.component.html',
  styleUrls: ['./stender.component.scss']
})
export class StenderComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.service.getTender();

  }

}
