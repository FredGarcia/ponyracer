import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { RaceModel } from '../models/race.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private http:HttpClient){
  }
  list(): Observable<Array<RaceModel>> {
   // const params = { sort: 'descending', page: '1' };
    // const params = {};
    const params = { status: 'PENDING' };
    return this.http.get<Array<RaceModel>>(`${environment.baseUrl}/api/races`,  { params }) ;    
  }
}