import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './Product/Product.component';
import { appRoutes } from './Routes';
import { ProductPostComponent } from './Product/ProductPost/ProductPost.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductserviceService } from './services/Productservice.service';
import { ProductUpdateComponent } from './Product/ProductUpdate/ProductUpdate.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { PDFModule, ExcelModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { HomeComponent } from './home/home.component';
import { DropDownsModule } from "@progress/kendo-angular-dropdowns";
import { UserService } from './services/User.service';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SepetComponent } from './sepet/sepet.component';
import { SepetService } from './services/sepet.service';
import { RegisterComponent } from './Register/Register.component';
import { Sepet2Component } from './sepet2/sepet2.component';
import{AuthenticationService} from './services/Authentication.service'
@NgModule({
  declarations: [																
    AppComponent,
      NavComponent,
      ProductComponent,
      ProductPostComponent,
      ProductUpdateComponent,
      HomeComponent,
      UserComponent,
      LoginComponent,
      SepetComponent,
      RegisterComponent,
      Sepet2Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule, 
    GridModule, 
    BrowserAnimationsModule,
    ButtonsModule,
    PDFModule,
    ExcelModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [UserService,ProductserviceService,SepetService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
