import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';
import { OrdersService } from 'src/app/services/orders.service';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {
[x: string]: any;
  message: string | undefined;
  data: any;

 

  constructor(private param:ActivatedRoute,private service:OrderDetailsService,private order:OrdersService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }
  
  orders(data:object):void{
    console.warn(data)
    this.order.orders(data).subscribe((res)=>{
      console.warn(res);
      this.message = 'Data sent successfully';
    });
  }


 

}