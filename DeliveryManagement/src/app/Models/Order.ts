import { PaymentType } from "./Enum/PaymentType";
import { StatusOrderType } from "./Enum/StatusOrderType";

export class Order{
id!:number;
ref!:String;
sum!:number;
deliveryPrice!:number;
productsWeightKg!:number;
orderCode!:String;
creationDate!:Date;
payment!:PaymentType;
statusOrder!:StatusOrderType;
}
