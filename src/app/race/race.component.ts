import { Component, Input } from '@angular/core';

import { RaceModel } from '../models/race.model';

import { FromNowPipe } from '../pipes/from-now.pipe'
@Component({
  selector: 'pr-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})


export class RaceComponent {
  fromNow: FromNowPipe = new FromNowPipe();
  @Input('course') onerace: RaceModel;
  
}