import { Component, OnInit } from '@angular/core';
// import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { RouterLinkActive } from '@angular/router';

import { UserService } from '../services/user.service';
@Component({
  selector: 'pr-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 // routerLinkActive: RouterLinkActive;

  constructor(private userService: UserService) { 
 //   console.log("Home homeService:");
  }

  ngOnInit(){}

  logout(){
    event.preventDefault();
    this.userService.logout();

  }

  isConnected(): boolean {
//    console.log("Home Connection");
    let isconnected = this.userService.retrieveUser();
//    console.log("Home Connecté ? " + isconnected);
    return isconnected;
  }
}
