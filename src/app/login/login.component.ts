import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  credentials = {
    login: '',
    password: ''
  };
  authenticationFailed = false;

  constructor(private userService: UserService, private router: Router) {}

  authenticate(): void {
    this.authenticationFailed = false;
    this.userService.authenticate(this.credentials).subscribe({
      next: () => this.router.navigate(['/']),
      error: () => (this.authenticationFailed = true)
    });
  }  
}