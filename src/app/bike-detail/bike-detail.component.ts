import { Component, OnInit } from '@angular/core';
import { Bike} from '../bike';
import { BikeService} from '../bike.service';
import { ActivatedRoute} from '@angular/router';
// import { Data } from '../mockData';

@Component({
  selector: 'app-bike-detail',
  templateUrl: './bike-detail.component.html',
  styleUrls: ['./bike-detail.component.css']
})
export class BikeDetailComponent implements OnInit {
  bike: Bike;
  constructor(
    private bikeService: BikeService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getBike();

  }
  getBike(){
    this.router.params.subscribe(param =>{
      this.bikeService.getBike(param.bikeID).subscribe(data =>{
        this.bike = data;
      })
    })
  }

}