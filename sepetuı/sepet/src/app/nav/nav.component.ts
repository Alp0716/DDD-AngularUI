import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleResolutionCache } from 'typescript';
import { LoginUser } from '../Models/LoginUser';
import { User } from '../Models/User';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public listItems: Array<string> =[
    "Araba",
    "Saat",
    "Eşya",
    "Giyim",
    "Yedek Parça",
    "Kırtasiye",
    "Telefon",
    "bilgisayar",
    "Yazıcı",
  ]
  ngOnInit() {}
}

