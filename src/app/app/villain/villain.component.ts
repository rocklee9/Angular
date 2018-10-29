import {Component, Input, OnInit} from '@angular/core';
import {Villain} from '../entity/villain';
import {ActivatedRoute} from "@angular/router";
import {VillainService} from "../services/villain.service";

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

  villain: Villain;
  constructor(private route:ActivatedRoute, private villainServer:VillainService) {
  	const id= +this.route.snapshot.paramMap.get('id');
  	this.villainServer.getVillainById(id).subscribe(
  	  x=>{
  	    this.villain=x;
      },
      error=>{
  	    console.log('Error!!');
      }
    )
  }

  ngOnInit() {
  }

}
