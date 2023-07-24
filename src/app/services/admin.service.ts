import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login } from '../dataTypes';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  loginMessage = new EventEmitter(false)
  constructor(private http: HttpClient, private router: Router) { }
  signUp(data: any) {
    let res = this.http.post('http://localhost:3000/admin', data, { observe: 'response' }).subscribe((res) => {
      this.isSellerLoggedIn.next(true);
      localStorage.setItem('seller', JSON.stringify(res.body))
      this.router.navigate(['seller'],)

    })


  }
  reloadSeller(){
    if (localStorage.getItem('seller')){
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller'])
    }
  }
  Userlogin(data:login){
    // console.warn(data)
    this.http.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((res:any)=>{
      console.warn(res)
      if(res && res.body && res.body.length){
        console.warn("user logged in")
        localStorage.setItem('seller', JSON.stringify(res.body))
        this.router.navigate(['seller'],)
      }
      else{
        console.warn("logIn Failed")
        this.loginMessage.emit(true)
      }
    })
  }
}
