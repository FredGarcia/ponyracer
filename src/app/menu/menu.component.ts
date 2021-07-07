import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit, OnDestroy {
  navbarCollapsed = true;

  
  userEventsSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userEventsSubscription = this.userService.userEvents.subscribe(user => (this.userService.storeLoggedInUser(user)));
 //   console.log("MENU ngOninit " , JSON.stringify(this.router));
  }

  ngOnDestroy(): void {
    if (this.userEventsSubscription) {
      this.userEventsSubscription.unsubscribe();
    }
  }

  toggleNavbar(evt): void {
    this.navbarCollapsed = !this.navbarCollapsed;
    console.log(JSON.stringify(evt));
  }

  logout(){
    event.preventDefault();
    this.userService.logout();
    this.router.navigate(['/']);
  }

  isConnected(): boolean {
  //  console.log("Menu Connection");
    let isconnected = this.userService.retrieveUser();
  //  console.log("Menu Connecté ? " + isconnected);
    return isconnected;
  }
}