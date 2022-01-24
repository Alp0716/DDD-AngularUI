import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../services/Productservice.service';
import { Product } from '../Models/product';
import{FormGroup,FormControl,Validator,FormBuilder, Validators, Form}from "@angular/forms";
import { Observable } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { Sepet } from '../Models/Sepet';
import { SepetService } from '../services/sepet.service';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
  styleUrls: ['./Product.component.css'],
  providers:[ProductserviceService]
})
export class ProductComponent implements OnInit {
  public onExcelExport(e: any): void {
    const rows = e.workbook.sheets[0].rows;
    rows[0].cells[2].hAlign = "center";
    let altIdx = 0;
    rows.forEach((row) => {
      if (row.type === "data") {
        if (altIdx % 2 !== 0) {
          row.cells.forEach((cell) => {
            cell.background = "#aabbcc";
          });
        }
        altIdx++;
      }
    });
  }
  constructor(private productservice:ProductserviceService,private alertifyservice:AlertifyService,
    private sepetservice:SepetService) { }
  product:Product[];
  sepetlist:Sepet[];
  sepetcount:number;
  //sepetprice:number;
  productPostform:FormGroup;

  ngOnInit(){
    // this.getsepet();
   this.getAll()
  
  }
  getAll(){
     this.productservice.getproduct().subscribe(data=>{
      this.product=data;
      console.log(this.product)
      
    });
  }
  delete(id:number){
   this.productservice.delete(id).subscribe(data=>{
    this.getAll()
    this.alertifyservice.message("ürün silindi")
   })
  }
  Add(product:Product){
    this.sepetservice.addproduct(product);
    
} 
//  remove(product:Product){
//    this.sepetservice.deleteproduct(product);
//  }
//  getsepet(){
//   this.sepetlist=this.sepetservice.getsepetlist();
//   this.sepetcount=this.sepetservice.getsepetlist().reduce((a,b)=>a=a+b.quantity,0)
//  }

  
}
