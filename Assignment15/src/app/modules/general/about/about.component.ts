import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent   {
  filteredString:string=''; 
  sortby:any='1';
  products:any=[];
  errMsg:any;
  constructor(proService:ProductService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
  }
}

  
