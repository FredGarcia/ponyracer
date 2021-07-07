import { Component, OnInit } from '@angular/core';

import { RaceModel } from '../models/race.model';
import { from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { RaceService } from '../services/race.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'pr-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  
  races: Array<RaceModel>
  now:Date;
  constructor(private userService: UserService, private router: Router, private racesService: RaceService) { 
    this.now = new Date()
    this.races = []
  }

  //public racesLength: number;
  ngOnInit(): void {
    this.racesService.list().subscribe(untruc => this.reception(untruc))
  
  }

  reception(races): void {
    this.races = races;
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

