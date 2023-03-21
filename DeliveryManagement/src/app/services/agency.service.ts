import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgencyDeliveryMan } from '../Models/AgencyDeliveryMan';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http:HttpClient) { }
  //agency Delivery Men
  //url
urlretrieveDeliveryMenTOPickup="http://localhost:8081/AgencyDeliveryMan/RetrieveDeliverymenByagencyWhenThegovernorateOfPickupisSomeGovernorateofdeliverymen?idPickup=";

  retrieveDeliveryMenTOPickup(idPickup:number){
    const options = { withCredentials: true };
     return this.http.get<AgencyDeliveryMan[]>(this.urlretrieveDeliveryMenTOPickup+`${idPickup}`,options);
  }
}
