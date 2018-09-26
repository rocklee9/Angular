import {Component, Input, OnInit} from '@angular/core';
import {Villain} from '../entity/villain';

@Component({
  selector: 'app-villain',
  templateUrl: './villain.component.html',
  styleUrls: ['./villain.component.css']
})
export class VillainComponent implements OnInit {

 @Input() villain: Villain;
  constructor() { 
  	this.villain=new Villain();
  	this.villain.name='Hoàng Dược Sư';
  	this.villain.skills=['Cửu âm chân kinh','Đàm chỉ thần công','Bích hải triều sinh khúc'];
  }

  ngOnInit() {
  }

}
