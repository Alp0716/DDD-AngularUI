import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from 'src/app/services/Productservice.service';
import{FormGroup,FormControl,Validator,FormBuilder, Validators}from "@angular/forms";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/services/alertify.service';
@Component({
  selector: 'app-ProductPost',
  templateUrl: './ProductPost.component.html',
  styleUrls: ['./ProductPost.component.css'],
  providers:[ProductserviceService],
})
export class ProductPostComponent implements OnInit {
products:Product;
productPostform:FormGroup;
  constructor(private productservice:ProductserviceService,
    private alertifyservice:AlertifyService,
    private formbuilder:FormBuilder,private router:Router) { }

createproductform(){
  this.productPostform=this.formbuilder.group({
  productId:[""],  
  ProductName:["",Validators.required],
  Stock:["",Validators.required],
  price:["",Validators.required]})
}
  ngOnInit() {
    this.createproductform();
  }
  Add(){

      this.products=Object.assign({},this.productPostform.value)
      this.productservice.add(this.products)
      this.alertifyservice.message("ürün eklendi")
      this.router.navigateByUrl("Product")
    
  }
 

}
