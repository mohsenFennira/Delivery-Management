import { GenderType } from "./Enum/GenderType";

export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  enabled!: boolean;
  tokenExpired!: boolean;
  banned!: boolean;
  phoneNumber!: string;
  BirthDate!:Date;
  image!:String;
  genderType!:GenderType;
  identity!: string;
  BrandName!: string;
  BrandLogo!: string;
  justification!: string;
  governorate!: string;
  city!: string;
  gear!: string;
  driveLicense!: string;
  dearAge!: number;
  co2!:number;
  resetToken!:number;
  rating!:number;
  numberOfRatings!:number;
  levelDelivery!:string;
}
