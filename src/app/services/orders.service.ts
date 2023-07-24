import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiUrl ='http://localhost:3000/orders'
  constructor(private http: HttpClient) { }

  orders(data: any) {
    return this.http.post(this.apiUrl, data)

  }


    
  
}