import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PerDirectoryResolutionCache } from 'typescript';
import { Product } from '../Models/product';
import { Sepet } from '../Models/Sepet';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  path="https://localhost:5001/Product";

constructor(private http:HttpClient) { }
getCartItems():Observable<Sepet[]> {
  return this.http.get<Sepet[]>(this.path).pipe(
    map((result:any[])=>{
      let cartItems: Sepet[] = [];
      for(let item of result){
        let productExists =false
        for(let i in cartItems){
          if(cartItems[i].productId===item.id){
            cartItems[i].quantity++
            productExists=true
            break;
          }
        }
        if (!productExists) {
          cartItems.push(new Sepet());
        }
      }
      return cartItems;
    })
  )

  
    }
    addProductToCart(product:Product): Observable<any> {
      return this.http.post(this.path, { product });
    }
    
}
