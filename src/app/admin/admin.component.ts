import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp, login } from '../dataTypes';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  message: string | undefined
  constructor(private admin: AdminService, private router: Router) { }
  showLogin = false;
  signError: string = '';
  ngOnInit() {
    // this.admin.reloadSeller()
  }

  signUp(data: SignUp): void {
    console.warn(data)
    this.admin.signUp(data)



  }

  Userlogin(data: login): void {
    this.signError="";
    console.warn(data);
    this.admin.Userlogin(data);
    this.admin.loginMessage.subscribe((isError) => {
      if (isError) {
        this.signError = "Email or password does not match"
      }
    })
  }


  openLogin() {
    this.showLogin = true
  }
  openSignIn() {
    this.showLogin = false
  }
}