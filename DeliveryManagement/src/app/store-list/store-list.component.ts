import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '../Models/Store';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent  {
  constructor(private pickupService:PickupService,private http:HttpClient){}
  ngOnInit(){
     this.getStore();
  }
  //////List Store
  store!:Store[];
  ////Get All Store by User Id
  getStore(){
    this.pickupService.getStoreByUser().subscribe(data=>{this.store=data});
  }


}
