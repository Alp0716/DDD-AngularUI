import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  FormBuilder,
  Validators,
  Form,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { AlertifyService } from '../services/alertify.service';
import { UserService } from '../services/User.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  constructor(private userservice: UserService, 
    private router: Router,
    private alertifyservice:AlertifyService) {}
  title = 'müsteri Listesi';
  user: User[];
  ngOnInit() {
    this.getall();
  }
  getall() {
    this.userservice.getuser().subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }
  delete1(userid: number) {
    this.userservice.delete(userid).subscribe(data=>{
      this.getall()
      this.alertifyservice.message("kullanıcı silindi")
     })
  }
}
