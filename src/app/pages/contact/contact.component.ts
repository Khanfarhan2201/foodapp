import { Component } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  message: string | undefined;
  constructor(private details:OrderDetailsService) { }

  ngOnInit():void{}
  contact(data:object):void{
    
    console.warn(data)
    this.details.contact(data).subscribe((res)=>{
      this.message="Form filled successfully"
      console.warn(res)
    });
  }

  
}
