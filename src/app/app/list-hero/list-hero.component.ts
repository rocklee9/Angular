import { Component, OnInit } from '@angular/core';
import {Hero} from "../entity/Hero";
import {listHero} from "../data/heroes";
import {HeroService} from "../services/hero.service";
import {MesService} from "../services/mes.service";

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero:Hero[];
  selectedHero:Hero;
  constructor( private heroService: HeroService ) {
  }
  ngOnInit() {
    this.heroService.getHero().subscribe(
      hero => {
        this.listHero = hero;
      },
      error =>{
        console.log('error !');
      }
    );
  }
  onSelect(hero : Hero):void{
     this.selectedHero = this.heroService.getHeroByID(hero.id);
  }
}
