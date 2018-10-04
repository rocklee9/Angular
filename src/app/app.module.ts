import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { VillainComponent } from './app/villain/villain.component';
import { ListHeroComponent } from './app/list-hero/list-hero.component';
import { ListVillainComponent } from './app/list-villain/list-villain.component';
import { Buoi4Component } from './app/buoi4/buoi4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillainComponent,
    ListHeroComponent,
    ListVillainComponent,
    Buoi4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
