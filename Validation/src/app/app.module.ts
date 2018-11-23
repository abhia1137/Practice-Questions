import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
 import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './services/common.service';
import { PostService } from './services/post.service';
import { DataComponent } from './data/data.component';
import { CheckService } from './services/check.service';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    DataComponent
    
   
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   

  ],
  providers: [CommonService,PostService,CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
