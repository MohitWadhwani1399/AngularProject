import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  InputUser=false;
  userInfo = [];
  constructor(private userService:UserProfileService){}

  ngOnInit(): void {
    this.userInfo = this.userService.provideUser(); 
  }
  Showadduserinput(event){
    this.InputUser = true;
  }
   Hideadduserinput(){
     this.InputUser = false;
   }
  SubmitUser(event,user){
    console.log("User Submitted",user);
    this.userInfo.unshift(user)
  }
  filterwithId(Id){
    console.log(Id);
  }

}
