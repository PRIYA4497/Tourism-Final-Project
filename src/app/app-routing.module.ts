import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {InsertpackComponent} from './packages/insertpack/insertpack.component';
import {UpdatepackComponent} from './packages/updatepack/updatepack.component';
import {DeletepackComponent} from './packages/deletepack/deletepack.component';
import {ViewpackComponent} from './packages/viewpack/viewpack.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
const routes: Routes = [
  
    {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'insertpack',component:InsertpackComponent},
  {path:'updatepack',component:UpdatepackComponent},
  {path:'deletepack',component:DeletepackComponent},
  {path:'deletepack',component:DeletepackComponent},
  {path:'viewpack',component:ViewpackComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
