import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../../components/home/home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
