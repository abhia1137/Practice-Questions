import { Component,OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { CheckService } from '../services/check.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit{
   signInForm: FormGroup;
  constructor(private commonService:CommonService,private router:Router,private checkService:CheckService) { }
  ngOnInit(){
    this.signInForm=new FormGroup({
      'email':new FormControl(null,[Validators.required, Validators.pattern(this.commonService. emailRegex)]),
      'password':new FormControl(null,[Validators.required, Validators.pattern(this.commonService.passwordRegex)])})
  }

signinUser(){
  if(this.signInForm.valid){
    if(this.checkService.data[0].email === this.signInForm.value.email && this.checkService.data[0].password=== this.signInForm.value.password)
    { this.router.navigate(['data']);
  }
   else{
     alert('email or password entered is invalid')
   }
  } 
  else{
    this.router.navigate(['signin']);
  }   
  }
}


 


//   valid
//   ngOnInit() {
// this.valid = true
//     this.signUpForm=new FormGroup({