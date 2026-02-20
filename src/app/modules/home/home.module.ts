import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { CldImgComponent } from '../../components/cld-img/cld-img.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { HSkillComponent } from '../../components/h-skill/h-skill.component';
import { HomeComponent } from '../../components/home/home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    HSkillComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    CldImgComponent,
    LayoutComponent
    // BrowserAnimationsModule
  ]
})
export class HomeModule { }
