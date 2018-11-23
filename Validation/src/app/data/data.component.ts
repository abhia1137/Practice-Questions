import {Component, OnInit, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, Form} from "@angular/forms";
import { PostService } from '../services/post.service';
import { CheckService } from '../services/check.service';
import { CommonService } from '../services/common.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
indexUpdate:number;
  dataArray;
  updateProduct: FormGroup;
  viewProduct: FormGroup;
  AddProduct: FormGroup;
  // @Input() public pageSize: number;
  // @Input() public itemsCount: number;
  // @Input() public data: any = null;
  // @Input() public position: string = "left";
  // @Output() public getPageData = new EventEmitter();

  constructor(private postService:PostService,private checkService:CheckService,private commonService:CommonService) {
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(resultArray => {
        this.checkService.view = resultArray
        this.dataArray = this.checkService.view;
      }),
      this.updateProduct = new FormGroup({
        'id': new FormControl('', [Validators.required,Validators.pattern(this.commonService.num)]),
        'title': new FormControl('', [Validators.required]),
        'body': new FormControl('', [Validators.required])
      });
    this.viewProduct = new FormGroup({
      'id': new FormControl('', [Validators.required,Validators.pattern(this.commonService.num)]),
      'title': new FormControl('', [Validators.required]),
      'body': new FormControl('', [Validators.required])
    });
    this.AddProduct = new FormGroup({
      'id': new FormControl('', [Validators.required,,Validators.pattern(this.commonService.num)]),
      'title': new FormControl('', [Validators.required]),
      'body': new FormControl('', [Validators.required])
    });
  }
 
  onUpdateProduct(index) {
    const control = this.updateProduct.controls
    const form ={
      'id': control.id.value,
      'title': control.title.value,
      'body': control.body.value
    }
    var index = this.dataArray.map(function(o) { return o.id; }).indexOf(form.id);
console.log("index  " + index);
    if(index===-1){
      this.dataArray[this.indexUpdate]=form;
    
    }
      else{
        alert('enter valid id')
      }
   
    
  }


  deleteData(index) {
    this.dataArray.splice(index, 1);
    console.log(this.dataArray);
  }

  viewData(index) {
    console.log(index);
    document.getElementById('view').style.display = 'block';
    this.viewProduct.setValue({
      id: this.dataArray[index].id,
      title: this.dataArray[index].title,
      body: this.dataArray[index].body
    });
   
    
  }

  openUpdate(index) {
    this.indexUpdate=index;
    document.getElementById('update').style.display = 'block';
    this.updateProduct.setValue({
      id: this.dataArray[index].id,
      title: this.dataArray[index].title,
      body: this.dataArray[index].body
    });

  }
  addProduct() {
    document.getElementById('Add').style.display = 'block';
this.AddProduct.reset();

  }

  onAddProduct() {
    const control = this.AddProduct.controls
    const form = {
      'id': control.id.value,
      'title': control.title.value,
      'body': control.body.value
    }
    console.log(form);
    this.dataArray.push(form);
  }
  
//   check(index){
//     var i = this.dataArray.length
//     var inArray=false;
//     // console.log(this.dataArray.length)
  
//     while(i--){

//     if(this.dataArray[i].id===this.dataArray[index].id){
//       inArray= true;
//       break;
//     }
    
//   }
//   console.log(inArray)
//   return inArray;
// }
// //     return false;
// //   }

}