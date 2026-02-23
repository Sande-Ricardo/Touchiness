import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GalleryPreviewComponent } from '../../components/gallery-preview/gallery-preview.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { MarkdownViewerComponent } from '../../components/markdown-viewer/markdown-viewer.component';
import { ProjectComponent } from '../../components/project/project.component';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    LayoutComponent,
    GalleryPreviewComponent,
    MarkdownViewerComponent
  ]
})
export class ProjectModule { }
