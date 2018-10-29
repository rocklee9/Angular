import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../entity/hero';
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../services/hero.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	@Input() hero: Hero;

  constructor( private route: ActivatedRoute, private heroService: HeroService) {
  	 this.hero=new Hero();
  	 this.hero.name='Đoàn dự';
  	 this.hero.skills=['Lăng ba vi bộ','Lục mạch thần kiếm','Bắc minh thần công'];
   }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHeroByID(id).subscribe(
      x=> {
        this.hero=x;
      }
    )
  }


}
