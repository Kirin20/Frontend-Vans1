import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VansserviceService } from '../vansservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
  email: any;
  password: any;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private service: VansserviceService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
      login() {

        if(this.email == "Afif@gmail.com" && this.password == '12345'){
          alert("Welcome to Vans Administrative Page")
          this.router.navigate(['home'])
        }
        else if (this.email == "Ammar@gmail.com" && this.password == '12345'){
          alert("Welcome to Vans Administrative Page")
          this.router.navigate(['home'])
    
        }
        else if (this.email == "Ikhwan@gmail.com" && this.password == '12345'){
          alert("Welcome to Champ Zone Run Administrative Page")
          this.router.navigate(['home'])
    
        }
        else if
        (this.email == "Aiman@gmail.com" && this.password == '12345'){
          alert("Welcome to Vans Administrative Page")
          this.router.navigate(['custpage'])
    
        }
        else{
          alert("You are not an administrator!!")
        }
    
      }
    
    }

