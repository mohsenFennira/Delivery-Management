import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pickup } from '../Models/Pickup';
import { Request } from '../Models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  ////Agency
  urlAssignRequestDeliveryManToPickup="http://localhost:8081/RequestController/assignRequestDeliveryAgencyandPickup?idPickup=";
  AssignRequestDeliveryManToPickup(r:Request,idDeliveryMan:number,idPickup:number){
    const options = { withCredentials: true };
   return this.http.post<Request>(this.urlAssignRequestDeliveryManToPickup+`${idPickup}`+'&idDeliveryMenAgency='+`${idDeliveryMan}`,r,options);
  }




   ////
   ////Freelancer
   urlAssignRequestToFreelancer="http://localhost:8081/RequestController/assignRequestDeliveryMenFreelancerandPickup?idPickup=";
   AssignRequestToFreelancer(r:Request,idPickup:number){
    const options = { withCredentials: true };
    return this.http.post<Pickup>(this.urlAssignRequestToFreelancer+`${idPickup}`,r,options);

   }

}
