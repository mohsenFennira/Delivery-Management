import { Component } from '@angular/core';
import { Request } from '../Models/Request';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-agency-list-request',
  templateUrl: './agency-list-request.component.html',
  styleUrls: ['./agency-list-request.component.css']
})
export class AgencyListRequestComponent {
  constructor(private requestService:RequestService){}
  request!:Request[];
 ngOnInit(){
  this.retrieveRequestByAgency();
 }

  retrieveRequestByAgency(){
    this.requestService.RetrieveRequestByAgency().subscribe(data=>{this.request=data});
  }
}
