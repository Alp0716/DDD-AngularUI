import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
constructor(private http:HttpClient,router:Router) { }
path="https://localhost:5001/Product";
product=Product;
formdata=Product;
ProductId:any;
entry:FormGroup
getproduct():Observable<any[]>{
  return this.http.get<any[]>(this.path);
}
getProduct1(productid):Observable<Product>{
  return this.http.get<Product>(this.path+"product"+productid);
}
add(product){
  this.http.post(this.path,product).subscribe();
}
delete(ProductId:number):Observable<any>{
  return this.http.delete(`${this.path}/${ProductId}`); 
}
update(product){
  return this.http.put(this.path,product)
}
}



