import { StatusPickupBuyer } from "./Enum/StatusPickupBuyer";
import { StatusPickupSeller } from "./Enum/StatusPickupSeller";

export class Pickup{
id!:number;
availableDeliver!:String;
orderOfTheSomeSeller!:Boolean;
comment!:String;
governorate!:String;
city!:String;
codePickup!:String;
shippingStatus!:String;
payed!:Boolean;
dateCreationPickup!:Date;
sum!:number;
nbRequest!:number;
deliveryTimeInHoursBuyer!:String;
deliveryTimeInHoursSeller!:String;
secondPhoneNumber!:String;
statusPickupSeller!:StatusPickupSeller;
statusPickupBuyer!:StatusPickupBuyer;





}
