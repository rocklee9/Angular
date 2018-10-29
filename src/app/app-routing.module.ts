import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListHeroComponent }      from './app/list-hero/list-hero.component';
import {HeroesComponent} from "./app/heroes/heroes.component";
import {HomeComponent} from "./app/home/home.component";
import {VillainComponent} from "./app/villain/villain.component";
import {ListVillainComponent} from "./app/list-villain/list-villain.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'heroes', component: ListHeroComponent },
  { path: 'heroes/:id', component: HeroesComponent },
  { path: 'home', component:HomeComponent },
  { path: 'villain/:id', component: VillainComponent},
  {path:'villains',component: ListVillainComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
