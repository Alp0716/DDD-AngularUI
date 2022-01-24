import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { AuthenticationService } from '../services/Authentication.service';
import { UserService } from '../services/User.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  loading = false;
  submitted = false;
  path="http://localhost:4200/user"

  constructor(private userservice:UserService,private authenticationService:AuthenticationService
    ,private formbuilder:FormBuilder, private router:Router,private alertifyservice:AlertifyService) {
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
     }

  ngOnInit() {
    this.registerForm=this.formbuilder.group({
      userId:["",Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
  get f(){return this.registerForm.controls;}
  onSubmit() {
    this.submitted = true;

   
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userservice.add(this.registerForm.value).pipe(first())
        .subscribe(
            data => {
                this.alertifyservice.success('Registration successful');
                this.router.navigate(['/user']);
            },
            error => {
                this.alertifyservice.error(error);
                this.loading = false;
            });
            this.router.navigateByUrl(this.path)
}
}
