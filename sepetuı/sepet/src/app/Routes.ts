import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './Product/Product.component';
import { ProductPostComponent } from './Product/ProductPost/ProductPost.component';
import { ProductUpdateComponent } from './Product/ProductUpdate/ProductUpdate.component';
import { RegisterComponent } from './Register/Register.component';
import { SepetComponent } from './sepet/sepet.component';
import { Sepet2Component } from './sepet2/sepet2.component';
import { UserComponent } from './user/user.component';
export const appRoutes: Routes = [
  { path: 'Product', component: ProductComponent },
  { path: 'productupdate', component: ProductUpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sepet', component: SepetComponent },
  {path:'productpost',component:ProductPostComponent},
  {path:'register',component:RegisterComponent},
  {path:'sepet2',component:Sepet2Component}
];
