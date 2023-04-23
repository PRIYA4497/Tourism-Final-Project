import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertpackComponent } from './packages/insertpack/insertpack.component';
import { UpdatepackComponent } from './packages/updatepack/updatepack.component';
import { DeletepackComponent } from './packages/deletepack/deletepack.component';
import { ViewpackComponent } from './packages/viewpack/viewpack.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InsertpackComponent,
    UpdatepackComponent,
    DeletepackComponent,
    ViewpackComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
