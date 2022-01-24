import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AlertifyService } from '../services/alertify.service';
import { AuthenticationService } from '../services/Authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private alertservice: AlertifyService,
    private route: Router,
    private router: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder
  ) {
    if (this.authenticationService.currentUserValue) {
      this.route.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.returnUrl = this.router.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() {
    return this.loginForm.value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
     .login(this.f.username.value,this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.route.navigate(['/']);
        },
        (error) => {
          this.alertservice.error(error);
          this.loading = false;
        }
        
      );
      console.log(this.loginForm)
  }
}
