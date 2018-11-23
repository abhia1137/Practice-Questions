import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormArray,Validator} from '@angular/forms';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { PasswordValidation } from "../password";
import { validateConfig } from '@angular/router/src/config';
import { CheckService } from '../services/check.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  addresses: FormArray;

  constructor(private commonService:CommonService,private router:Router,private checkService:CheckService) { }
  
  ngOnInit() {
    
    this.signUpForm=new FormGroup({
     'name':new FormControl(null,[Validators.required, Validators.pattern(this.commonService.alphaNumeric)]),
      'username':new FormControl(null,[Validators.required,Validators.minLength(8),Validators.pattern(this.commonService.alphaNumeric)]),
      'pincode':new FormControl(null,[Validators.required,Validators.pattern(this.commonService.pincode),Validators.pattern(this.commonService.Length)]),
      'address':new FormControl(null,[Validators.required, Validators.pattern(this.commonService.addressRegex)]),
      'addresses':new FormArray([]),
      'email':new FormControl(null,[Validators.required, Validators.pattern(this.commonService. emailRegex)]),
      'password':new FormControl(null,[Validators.required, Validators.pattern(this.commonService.passwordRegex)]),
      'confirmPassword':new FormControl(null,[Validators.required]),
      'image1': new FormControl('', Validators.required),
      'phoneNumber': new FormControl('', Validators.required)
      },
       PasswordValidation.MatchPassword 
    );
    (<FormArray>this.signUpForm.get('addresses')).push(
      new FormGroup({
         'address': new FormControl(null, [ Validators.required, Validators.pattern(this.commonService.addressRegex)] )}) )
        
  }
 
  addNewRow(){
    (<FormArray>this.signUpForm.get('addresses')).push(
      new FormGroup({
         'address': new FormControl('')}));
  }
  deleteRow(i){
    // remove the chosen row
    (<FormArray>this.signUpForm.get('addresses')).removeAt(i);
  }
  svalid: boolean=false;

  changeEvent(event) {
         if (event.target.checked) {
             this.svalid= true;
         }
         else {
             this.svalid=false;
         }
        
     }
  fileName;
  url
  base64textString
  cover1
  handleFileSelect1
  (evt) {
      var files = evt.target.files;
      var file = files[0];
      this.fileName = file.name;
      if (files && file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
      }
    }
  
    _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.url = readerEvt.target.result
      this.base64textString = btoa(binaryString);
  
      var form = {
        'imageContent': "data:image/png;base64," + this.base64textString,
        'name': this.fileName
      }
      this.cover1 = form.imageContent
    };
  
registerUser(){
  // if(this.signUpForm.valid){
    var control = this.signUpForm.controls;
    var form = {
      'name':control.name.value,
      'username':control.username.value,
      'email': control.email.value,
      'pincode': control.email.value,
      'addresses':  control.addresses.value,
      'password':  control.password.value,
      'confirmPassword':  control.password.value,
      'image1': this.cover1,
    }
    console.log(form)
  //   this.checkService.data.push(this.signUpForm.value)
  // this.signUpForm.reset();

    this.router.navigate(['signin']);
  
  }
}