import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http:HttpClient) { }
  ///Url Backend
  url="http://localhost:8081/Pickup/";
}
