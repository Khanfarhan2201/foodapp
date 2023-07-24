import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
menuType: any;
  constructor(private activeRoute:ActivatedRoute){}
  ngOninit(){
     
  }
}
