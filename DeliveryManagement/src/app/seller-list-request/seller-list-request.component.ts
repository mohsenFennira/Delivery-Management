import { Component } from '@angular/core';
import { Request } from '../Models/Request';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-seller-list-request',
  templateUrl: './seller-list-request.component.html',
  styleUrls: ['./seller-list-request.component.css']
})
export class SellerListRequestComponent {
  constructor(private requestService:RequestService){}
  ngOnInit(){
    this.retrieveRequestBySeller();
  }
  request!:Request[];

  retrieveRequestBySeller(){
    this.requestService.retrieveRequestBySeller().subscribe(data=>{this.request=data});
  }

}
