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
  //seller
  ///Url Backend Seller
  urlstore="http://localhost:8081/Pickup/RetrieveStoreOfUser";
  urlorder="http://localhost:8081/Pickup/retrieveOrderByseller?idStore=";
  urlAddProduct="http://localhost:8081/Pickup/AssignPickupByStoreAndOrder?id=";
  urlGetOrderById="http://localhost:8081/Pickup/GetOrderById?IdOrder=";
  urlGetShippingByOrder="http://localhost:8081/Pickup/GetShippingByOrder?IdOrder=";
  urlGetBuyerByOrder="http://localhost:8081/Pickup/GetBuyerByOrder?IdOrder=";
  urlRetrievePickupWaitingBySeller="http://localhost:8081/Pickup/retrievePickupBysellerAttent";
  urlDeletePickup="http://localhost:8081/Pickup/RemovePickup?id=";
  urlupdatePickup="http://localhost:8081/Pickup/UpdatePickup?idPikup=";
  urlGetPickupById="http://localhost:8081/Pickup/RetrievePickup?id=";
  urlGetOrderBiPickupId="http://localhost:8081/Pickup/GetOrderByPickupId?idPickup=";
  urlGetShippingByPickupId="http://localhost:8081/Pickup/GetShippingByPickupId?idPickup=";
  urlGetBuyerByPickupId="http://localhost:8081/Pickup/GetBuyerByPickupId?idPickup=";

  getStoreByUser(){
    const options = { withCredentials: true };
    return this.http.get<Store[]>(this.urlstore,options);
    }
    getOrderByStore(id:number){
      const options = { withCredentials: true };
      return this.http.get<Order[]>(this.urlorder+`${id}`,options);
    }
    addPickup(p:Pickup,idOrder:number,idStore:number){
      const options = { withCredentials: true };
      return this.http.post<Pickup>(this.urlAddProduct+`${idOrder}`+'&IdSotre='+`${idStore}`,p,options);
    }
    GetOrderById(idOrder:number){
      const options = { withCredentials: true };
         return this.http.get<Order>(this.urlGetOrderById+`${idOrder}`,options);
    }
    GetShippingByOrder(idOrder:number){
      const options = { withCredentials: true };
      return this.http.get<Shipping>(this.urlGetShippingByOrder+`${idOrder}`,options);
     }
     GetBuyerByOrder(idOrder:number){
      const options = { withCredentials: true };
      return this.http.get<User>(this.urlGetBuyerByOrder+`${idOrder}`,options)
     }
     GetPickupBySellerWaiting(){
      const options = { withCredentials: true };
      return this.http.get<Pickup[]>(this.urlRetrievePickupWaitingBySeller,options);
    }
    DeletePickup(idPickup:number){
      return this.http.delete<Pickup>(this.urlDeletePickup+`${idPickup}`);
    }
    UpdatePickup(p:Pickup,idPickup:number){
      const options = { withCredentials: true };
      return this.http.put<Pickup>(this.urlupdatePickup+`${idPickup}`,p,options);
    }
    GetPickupById(idPickup:number){
      const options = { withCredentials: true };
       return this.http.get<Pickup>(this.urlGetPickupById+`${idPickup}`,options);
    }
    GetOrderByPickupId(idPickup:number){
      const options = { withCredentials: true };
      return this.http.get<Order>(this.urlGetOrderBiPickupId+`${idPickup}`,options);
    }
    GetShippingByPickupId(idPickup:number){
      const options = { withCredentials: true };
      return this.http.get<Shipping>(this.urlGetShippingByPickupId+`${idPickup}`,options);
    }
    GetBuyerByPickupId(idPickup:number){
      const options = { withCredentials: true };
      return this.http.get<User>(this.urlGetBuyerByPickupId+`${idPickup}`,options);
    }
   //end Seller

   //Agency

   //Url
   urlRetrievePickupBeTAgencyAndStore="http://localhost:8081/Pickup/RetrievePickupsbetweenAgencyBranchAndStoreInTheSomeGovernorat";



   RetrievePickupBeTAgencyAndStore(){
    const options = { withCredentials: true };
    return this.http.get<Pickup[]>(this.urlRetrievePickupBeTAgencyAndStore,options);
   }
   //endAgency


   //Freelancer
   //Url

   urlRetrievePickupsFreelancer="http://localhost:8081/Pickup/RetrievePickupsByGovernoratBetweenStoreAndDeliveryMenFreelancer";

   RetrievePickupsFreelancer(){
    const options = { withCredentials: true };
    return this.http.get<Pickup[]>(this.urlRetrievePickupsFreelancer,options);
   }
}
