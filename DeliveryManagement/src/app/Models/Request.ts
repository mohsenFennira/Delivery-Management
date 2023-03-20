import { RequestStatus } from "./Enum/RequestStatus";

export class Request{
  id!:number;
  localDateTime!:Date;
  requestStatus!:RequestStatus;
}
