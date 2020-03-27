// import {Injectable } from '@angular/core';
// import { Data } from './mockData';
// import { Bike } from './bike';
// import{ HttpClient} from '@angular/common/http';
// import{ Observable} from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class BikeService{
//   api="http://5e79b9de17314d001613350f.mockapi.io/bike"
//   constructor(
//     private http: HttpClient,
//   ) { }

//   getBikes(): Observable<Bike[]>{

//     return this.http.get<Bike[]>(this.api);
//   }

//   getBike(id): Observable<Bike>{

//     return this.http.get<Bike> {`${this.api}/${id}`};
//   }