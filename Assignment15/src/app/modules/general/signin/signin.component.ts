import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent  {
  productForm = new FormGroup({
    productName: new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{5,15}$')]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-z]{1,15}$')]),
      postal:new FormControl('',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })
  })
submitData() {
    console.log(this.productForm)
    console.log(this.productForm.value)
  }
}

  
  