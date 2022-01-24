import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../Models/product';
import { Sepet } from '../Models/Sepet';
import { AlertifyService } from '../services/alertify.service';
import { CartService } from '../services/Cart.service';
import { ProductserviceService } from '../services/Productservice.service';

@Component({
  selector: 'app-sepet2',
  templateUrl: './sepet2.component.html',
  styleUrls: ['./sepet2.component.css']
})
export class Sepet2Component implements OnInit {
  cartItems :Sepet[];

  cartTotal = 0
  @Input() productItem: Product;
  @Input() addedToWishlist: boolean;

  constructor(private cartService:CartService, private msg:AlertifyService,private wishlistService:ProductserviceService) { }

  ngOnInit() {
    
    this.loadCartItems();
  }
  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: Sepet[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }
  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.quantity * item.price)
    })
  }
  handleAddToCart() {
    this.cartService.addProductToCart(this.productItem).subscribe();
    
  }
  handleAddToWishlist() {
    this.wishlistService.add(this.productItem.productId)
    
  }
  handleRemoveFromWishlist() {
    this.wishlistService.delete(this.productItem.productId).subscribe(() => {
      this.addedToWishlist = false;
    })
  }

}
