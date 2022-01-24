import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Sepet } from '../Models/Sepet';
import { ProductPostComponent } from '../Product/ProductPost/ProductPost.component';
import { ProductserviceService } from '../services/Productservice.service';
import { SepetService } from '../services/sepet.service';

@Component({
  selector: 'app-sepet',
  templateUrl: './sepet.component.html',
  styleUrls: ['./sepet.component.css']
})
export class SepetComponent implements OnInit,DoCheck {
  public products : Product[];
  public grandTotal !: any;
 sepetlist:Sepet[];
 sepetcount:number;
 sepetprice:number;
 sepet:Sepet[];
  constructor(private sepetservice:SepetService,private productservice:ProductserviceService) { }

  ngOnInit(){}
  
  ngDoCheck() {
    this.sepetservice.getsepetlist();
    this.sepetlist=this.sepetservice.getsepetlist();
    this.sepetcount=this.sepetservice.getsepetlist().reduce((a,b)=>a=a+b.quantity,0)
    
  }
  add(product:Sepet){
this.sepetservice.addproduct(product.product);
  }
  delete(product:Sepet){
    this.sepetservice.deleteproduct(product.product)
  }
 

}
