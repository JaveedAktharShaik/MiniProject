import { Component, OnInit } from '@angular/core';
import { JavaserviceService } from 'src/app/services/javaservice.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent  {
  filteredString:string='';
  sortby:any='1';
  courses:any=[];
  errMsg:any;
  constructor(proService:JavaserviceService){
    proService.getalljavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }

  

}

  