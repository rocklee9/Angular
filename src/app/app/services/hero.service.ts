import { Injectable } from '@angular/core';
import {listHero} from "../data/heroes";
import {Hero} from "../entity/Hero";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor() { }
  getHero(): Hero[]{ return listHero; }
  getHeroByID(id:Number): Hero{
    let tam;
    listHero.forEach(function (currentValue){
      if(currentValue.id==id){
        tam=currentValue;

      }
    });

    return tam;
  }
  // getHeroByID(id:Number): Hero{
  //   return listHero.find(hero=> hero.id==id);
  // }
}

