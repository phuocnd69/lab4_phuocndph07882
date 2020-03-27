import { Component, OnInit } from '@angular/core';
import { Data} from '../mockData';
import { Bike } from '../bike';
import { BikeService} from '../bike.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  selected: Bike;
  bikes: Bike[];
  constructor(
    private bikeService: BikeService
  ) { }

  ngOnInit() {
    this.getBikes();
  }

  showDetail(bike){
    this.selected=bike;
    console.log(bike);
  }

  getBikes(){
    this.bikeService.getBikes().subscribe(Data => {
      this.bikes = Data;
    })
  }

}