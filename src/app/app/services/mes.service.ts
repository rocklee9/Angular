import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
// import {mes} from "../data/mes";

@Injectable({
  providedIn: 'root'
})
export class MesService {
  list:string[]=[];

  getMes():Observable<string[]>{
    return of(this.list)
  }
  add(s: string) : void{
    this.list.push(s);
  }
  // xoa() : void {
  //
  // }
  clear(): void {
    this.list=[];
  }
}
