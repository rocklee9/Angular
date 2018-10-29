import { Component, OnInit } from '@angular/core';
import {listVillain} from "../data/villains";
import {Villain} from "../entity/Villain";
import {VillainService} from "../services/villain.service";

@Component({
  selector: 'app-list-villain',
  templateUrl: './list-villain.component.html',
  styleUrls: ['./list-villain.component.css']
})
export class ListVillainComponent implements OnInit {
  listVillain:Villain[];
  constructor(private villainService: VillainService) {

  }

  ngOnInit() {
    this.villainService.getVillain().subscribe(
      x=>{
        this.listVillain=x;
      },
      error=>{
        console.log('Error!!');
      }
    )
  }
}
