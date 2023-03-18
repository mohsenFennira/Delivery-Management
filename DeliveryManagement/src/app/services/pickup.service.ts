import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../Models/Store';
import { Order } from '../Models/Order';
import { Pickup } from '../Models/Pickup';
import { retry } from 'rxjs';
import { Shipping } from '../Models/Shipping';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class PickupService {

  constructor(private http:HttpClient) { }
  ///Url Backend
  urlstore="http://localhost:8081/Pickup/RetrieveStoreOfUser";
  urlorder="http://localhost:8081/Pickup/retrieveOrderByseller?idStore=";
  urlAddProduct="http://localhost:8081/Pickup/AssignPickupByStoreAndOrder?id=";
  urlGetOrderById="http://localhost:8081/Pickup/GetOrderById?IdOrder=";
  urlGetShippingByOrder="http://localhost:8081/Pickup/GetShippingByOrder?IdOrder=";
  urlGetBuyerByOrder="http://localhost:8081/Pickup/GetBuyerByOrder?IdOrder=";
  getStoreByUser(){
    return this.http.get<Store[]>(this.urlstore);
    }
    getOrderByStore(id:number){
      return this.http.get<Order[]>(this.urlorder+`${id}`);
    }
    addPickup(p:Pickup,idOrder:number,idStore:number){
      return this.http.post<Pickup>(this.urlAddProduct+`${idOrder}`+'&IdSotre='+`${idStore}`,p);
    }
    GetOrderById(idOrder:number){
         return this.http.get<Order>(this.urlGetOrderById+`${idOrder}`);
    }
    GetShippingByOrder(idOrder:number){
      return this.http.get<Shipping>(this.urlGetShippingByOrder+`${idOrder}`);
     }
     GetBuyerByOrder(idOrder:number){
      return this.http.get<User>(this.urlGetBuyerByOrder+`${idOrder}`)
     }
}
