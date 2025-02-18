import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers:[]
})
export class CoreModule {
  consrtuctor(){
    console.log("esto se ejecuta?");
    
  }
}
