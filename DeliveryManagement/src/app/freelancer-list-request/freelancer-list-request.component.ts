import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Request } from '../Models/Request';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-freelancer-list-request',
  templateUrl: './freelancer-list-request.component.html',
  styleUrls: ['./freelancer-list-request.component.css']
})
export class FreelancerListRequestComponent {
  constructor(private requestService:RequestService,private r:Router){}
ngOnInit(){
  this.RetrieveRequestByFreelancer();
}
request!:Request[];


  RetrieveRequestByFreelancer(){
    this.requestService.RetrieveRequestByFreelancer().subscribe(data=>{this.request=data});
  }
  DeleteRequest(idRequest:number){
    this.requestService.DeleteRequest(idRequest).subscribe(()=>{this.RetrieveRequestByFreelancer();});
  }
}
