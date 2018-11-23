import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

@Injectable()
export class CommonService {

  fNameRegex:any=new RegExp(/\w+\s{1}\w+\s{1}\w+/);
  contactRegex:any=new RegExp(/^\d{10}$/);
  emailRegex:any = new RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  passwordRegex:any=new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,15}$/);
  numericRegex: any = new RegExp(/(0|[1-9][0-9]*)$/);
  alphaNumeric: any = new RegExp (/^[a-zA-Z0-9]+$/);
  addressRegex: any =new RegExp(/^[\w\s-]+$/);
  pincode: any = new RegExp(/^[1-9][0-9]{5}$/) 
  Length: any =  new RegExp(/^\d{6}$/)
  num:any=new RegExp(/^[0-9]+$/)
}
