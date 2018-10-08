import { Component, OnInit } from '@angular/core';
import {Hero} from "../entity/Hero";
import {listHero} from "../data/heroes";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-list-hero',
  templateUrl: './list-hero.component.html',
  styleUrls: ['./list-hero.component.css']
})
export class ListHeroComponent implements OnInit {
  listHero:Hero[];
  selectedHero:Hero;
  constructor( private heroService: HeroService  ) {


  }
  ngOnInit() {
    this.listHero= this.heroService.getHero();

  }
  onSelect(hero : Hero):void{
     this.selectedHero = this.heroService.getHeroByID(hero.id);
  }
}
