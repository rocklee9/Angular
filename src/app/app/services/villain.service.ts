import { Injectable } from '@angular/core';
import {Observable,of} from "rxjs/index";
import {Villain} from "../entity/Villain";
import {listVillain} from "../data/villains";

@Injectable({
  providedIn: 'root'
})
export class VillainService {

  constructor() { }
  getVillain(): Observable<Villain[]>{
    return of(listVillain);
  }
  getVillainById(id: number): Observable<Villain>{
    return of(listVillain.find(x=>x.id==id));
  }
}
