import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../Models/Order';
import { PickupService } from '../services/pickup.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  constructor(private pickupService:PickupService,private http:HttpClient,private route: ActivatedRoute){}
  order!:Order[];
  id!:number;
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.getOrdersByStore(this.id); // Replace 1 with the actual store ID
  }



  getOrdersByStore(id: number): void {
    this.pickupService.getOrderByStore(id)
      .subscribe(data => { this.order= data});
  }
}
