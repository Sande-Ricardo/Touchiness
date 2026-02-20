import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutComponent } from '../../components/layout/layout.component';
import { ProjectComponent } from '../../components/project/project.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    LayoutComponent
  ]
})
export class ProjectModule { }
