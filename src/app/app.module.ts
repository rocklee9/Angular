import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './app/heroes/heroes.component';
import { VillainComponent } from './app/villain/villain.component';
import { ListHeroComponent } from './app/list-hero/list-hero.component';
import { ListVillainComponent } from './app/list-villain/list-villain.component';
import { MessengeComponent } from './app/messenge/messenge.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillainComponent,
    ListHeroComponent,
    ListVillainComponent,
    MessengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
