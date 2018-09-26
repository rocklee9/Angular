import { Component, OnInit } from '@angular/core';
import {listVillain} from "../data/villains";
import {Villain} from "../entity/Villain";

@Component({
  selector: 'app-list-villain',
  templateUrl: './list-villain.component.html',
  styleUrls: ['./list-villain.component.css']
})
export class ListVillainComponent implements OnInit {
  listVillain:Villain[]
  selectVillain:Villain
  constructor() {
    this.listVillain=listVillain;
  }

  ngOnInit() {
  }

  onSelectVillain(villain: Villain):void {
    this.selectVillain=villain
  }
}
