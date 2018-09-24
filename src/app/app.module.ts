import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { VillainComponent } from './app/villain/villain.component';
import { ListHeroComponent } from './app/list-hero/list-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillainComponent,
    ListHeroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
