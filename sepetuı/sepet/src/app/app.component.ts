import { Component } from '@angular/core';
import { ProductserviceService } from './services/Productservice.service';
import { SepetService } from './services/sepet.service';
import { UserService } from './services/User.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sepet';
  path="http://localhost:14513/";
  constructor(private productservice:ProductserviceService,
    private userservice:UserService,
    private sepetservice:SepetService){
  }
}
