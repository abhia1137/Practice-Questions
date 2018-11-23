import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';


const appRoutes: Routes = [
  { path: '', component:HomeComponent },
   { path: 'signup', component: SignupComponent},
   { path: 'signin', component: SigninComponent},
    { path: 'data', component: DataComponent}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
