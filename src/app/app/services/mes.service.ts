import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {mes} from "../data/mes";

@Injectable({
  providedIn: 'root'
})
export class MesService {
  constructor() { }
  getMes():Observable<string[]>{
    return of(mes)
  }
  add(s: string) : void{
    mes.push(s);
  }
  clear():void{
    var tam=mes.length;
    for(var i=0;i<tam;i++){
      mes.pop();
    }
  }
}
