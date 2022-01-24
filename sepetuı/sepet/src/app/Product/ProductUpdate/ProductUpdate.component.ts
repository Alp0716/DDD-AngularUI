import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from 'src/app/services/Productservice.service';
import { Product } from 'src/app/Models/product';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-ProductUpdate',
  templateUrl: './ProductUpdate.component.html',
  styleUrls: ['./ProductUpdate.component.css']
})


export class ProductUpdateComponent implements OnInit {
  product:Product;
  products:Product[];
  editForm:FormGroup;
 path:"http://localhost:4200/Product";


  constructor(private productservice:ProductserviceService,
    private activerouter:ActivatedRoute,
    private formbuilder:FormBuilder,
    private router:Router,
    private alertifyservice:AlertifyService) { }
form:Product;
  ngOnInit(){
    this.getAllProduct()
    this.editForm=this.formbuilder.group({
      productId:[],
      productName:["",Validators.required],
      Stock:["",Validators.required],
      price:["",Validators.required]
    })

  }

  getAllProduct(){
    this.productservice.getproduct().subscribe(data=>{
      this.products=data
    })  
  }

  getproductbyıd(id){
    this.productservice.getProduct1(id).subscribe(data=>{this.editForm.setValue(data)})
  }
 update(){
   if(this.editForm.valid){
      this.product=Object.assign({},this.editForm.value);
      this.productservice.update(this.product).subscribe(data=>{data=this.product});
    //  this.productservice.getproduct().subscribe(data=>{data=this.products})
    this.alertifyservice.message("ürün güncellendi")
    this.router.navigateByUrl(this.path)
   
      console.log(this.product)
 }
    
 }
}

