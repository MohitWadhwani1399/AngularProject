import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  userInfo:{
    Id:Number,
    FirstName:string,
    LastName:string,
    Username:string,
    email:string,
    age:Number
  }
 

  ngOnInit(): void {
    console.log(this.userInfo.Id);
    
  }

}
