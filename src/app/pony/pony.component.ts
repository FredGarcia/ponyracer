import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PonyModel } from '../models/pony.model';

@Component({
  selector: 'pr-pony',
  templateUrl: './pony.component.html',
  styleUrls: ['./pony.component.css']
})
export class PonyComponent implements OnInit {

  @Input() pony: PonyModel;
  @Output() readonly ponyClicked = new EventEmitter<PonyModel>();
  
  constructor(/*private ponyService: PonyService,*/ private route: ActivatedRoute) { }

    ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('ponyId')!;
  //  this.ponyService.get(id).subscribe(pony => (this.pony = pony));
    }

  getPonyImageUrl(): string {
    console.log('PONY:'+ this.pony);
    return `assets/images/pony-${this.pony.color.toLowerCase()}.gif`;
  }

  clicked(): void {
     this.ponyClicked.emit(this.pony);
  }
}
