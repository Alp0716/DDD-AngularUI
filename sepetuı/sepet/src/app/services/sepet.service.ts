import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../Models/product';
import { Sepet } from '../Models/Sepet';
import { Sepetlist } from '../Models/sepetlist';

@Injectable()
export class SepetService {
 public cartitemList:any[]
 public productList= new BehaviorSubject<any>([]);

constructor(private http:HttpClient) { }
getproducts(){
    return this.productList.asObservable();
}
getsepetlist():Sepet[]{
    return Sepetlist;
}
addproduct(product:Product){
    var productcontains=Sepetlist.find(p=>p.product.productId==product.productId)
    if(productcontains)
    productcontains.quantity +=1 ;
    
    else{
        let sepet= new Sepet();
        sepet.product=product;
        sepet.productId=product.productId;
        sepet.quantity=1;
        Sepetlist.push(sepet);
    }
    
}
 clearsepet(){
     Sepetlist.splice(0,Sepetlist.length)
 }
 deleteproduct(product:Product){
     var productcontains=Sepetlist.find(p=>product.productId==product.productId)
     if(productcontains){
         var productindex= 1;
         productindex=Sepetlist.indexOf(productcontains);
        if(productindex!=1)
        Sepetlist.splice(productindex,1);
     }
 }
}