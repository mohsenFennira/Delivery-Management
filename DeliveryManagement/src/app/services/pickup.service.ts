import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../Models/Store';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http:HttpClient) { }
  ///Url Backend
  url="http://localhost:8081/Pickup/RetrieveStoreOfUser";
  urlorder="http://localhost:8081/Pickup/retrieveOrderByseller?idStore=";

  getStoreByUser(){
    return this.http.get<Store[]>(this.url);
    }
    getOrderByStore(id:number){
      return this.http.get<Order[]>(this.urlorder+`${id}`);
    }
}
