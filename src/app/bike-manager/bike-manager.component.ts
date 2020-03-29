import { Component, OnInit } from '@angular/core';
import{ Data } from '../mockData';
import{ Bike } from '../bike'
@Component({
  selector: 'app-bike-manager',
  templateUrl: './bike-manager.component.html',
  styleUrls: ['./bike-manager.component.css']
})
export class BikeManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


     bikes=Data;
  removeItem(id){
    this.bikes= this.bikes.filter(bikes => bikes.id !==id);
  }

}