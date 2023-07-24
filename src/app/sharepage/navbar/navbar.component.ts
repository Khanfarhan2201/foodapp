import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuType : String = 'default'
  constructor(private route:Router) {}

  ngOnInit():void{
   
    this.route.events.subscribe((val:any)=>{
      if (val.url){
       
        if(localStorage.getItem('admin') && val.url.includes('admin')){
          console.warn("in Admin area")
          this.menuType = "Admin"
        }
        else{
          console.warn("outside Admin area")
          this.menuType = "default"
        }
      }
    })
  }

}
