import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectComponent } from '../../components/project/project.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
