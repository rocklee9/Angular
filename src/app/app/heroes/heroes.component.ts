import { Component, OnInit } from '@angular/core';
import {Hero} from '../entity/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	hero: Hero;

  constructor() {
  	this.hero=new Hero();
  	this.hero.name='Đoàn dự';
  	this.hero.skills=['Lăng ba vi bộ','Lục mạch thần kiếm','Bắc minh thần công'];
   }

  ngOnInit() {
  }

}
