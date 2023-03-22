import { Component } from '@angular/core';
import { Request } from '../Models/Request';
import { User } from '../Models/User';
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
  users!: User; // initialize an empty array to hold the users

  retrieveRequestBySeller(){
    this.requestService.retrieveRequestBySeller().subscribe(data => {
      this.request = data;

      // for each request, retrieve the associated user and add it to the array
      for (let r of this.request) {
        this.requestService.retrieveDelievryFreelancerofRequest(r.id).subscribe(user => {
          this.users = user;
        });
      }
    });
  }

  getUser() {
    return this.users;
  }

}
