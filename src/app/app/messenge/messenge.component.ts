import { Component, OnInit } from '@angular/core';
import {MesService} from "../services/mes.service";

@Component({
  selector: 'app-messenge',
  templateUrl: './messenge.component.html',
  styleUrls: ['./messenge.component.css']
})
export class MessengeComponent implements OnInit {
  mes: string[];

  constructor(private  MesService: MesService) { }

  ngOnInit() {
    this.MesService.getMes().subscribe(
      x => {
        this.mes = x;
      },
      error =>{
        console.log('error !');
      }
    );
  }
  clear1():void{
    this.MesService.clear();
  }

}
