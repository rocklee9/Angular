import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {mes} from "../data/mes";

@Injectable({
  providedIn: 'root'
})
export class MesService {
  // mes: string[];
  constructor() { }
  getMes():Observable<string[]>{
    return of(mes)
  }
  add(s: string) : void{
    mes.push(s);
  }
  clear():void{
    // this.mes=[];
  }
}
