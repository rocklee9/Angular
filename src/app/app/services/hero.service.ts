import { Injectable } from '@angular/core';
import {listHero} from "../data/heroes";
import {Hero} from "../entity/Hero";
import {Observable, of} from "rxjs";
import {MesService} from "./mes.service";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(public  MesService: MesService) { }
  getHero():Observable<Hero[]> {
     this.MesService.add('khơi tạo thành công');
    return of(listHero); }

  getHeroByID(id:number): Observable<Hero> {
    this.MesService.add('vừa vào đồng chí : '+ listHero.find(hero=> hero.id==id).name);
    return of(listHero.find(hero=> hero.id==id));

  }

}

