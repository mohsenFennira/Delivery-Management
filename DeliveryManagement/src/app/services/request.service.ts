import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Request } from '../Models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http:HttpClient) { }
  urlAssignRequestDeliveryManToPickup="http://localhost:8081/RequestController/assignRequestDeliveryAgencyandPickup?idPickup=";
  AssignRequestDeliveryManToPickup(r:Request,idDeliveryMan:number,idPickup:number){
   return this.http.post<Request>(this.urlAssignRequestDeliveryManToPickup+`${idPickup}`+'&idDeliveryMenAgency='+`${idDeliveryMan}`,r);
  }
}
