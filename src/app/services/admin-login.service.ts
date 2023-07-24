import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../dataTypes';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

 
}
