import { Injectable } from '@angular/core';
import { Heros } from './heros';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HerosListService {

  constructor() { }

  getHeros(): Observable<Heros[]> {
    return of(HEROS);
  }
}
