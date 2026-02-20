import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ThemeControllerService } from '../../core/services/theme-controller.service';
import { AuxiliarLayout, Layout } from '../../interfaces/layout';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  emptyLayout: Layout[] = [];
  emptyAuxiliarLayout: AuxiliarLayout[] = [];

  layoutData = input<Layout[]>(this.emptyLayout);
  auxiliarLayoutData = input<AuxiliarLayout[]>(this.emptyAuxiliarLayout);

  

  constructor(
    public themeControllerSv:ThemeControllerService,
    private router:Router,
    private route:ActivatedRoute
  ){
    this.currentTheme = this.themeControllerSv.getCurrentTheme();
  }
  currentTheme: 'light' | 'dark';

  goTo(id:string,i:number){
    if(this.layoutData()[i].isById){
      console.log("intern");
      document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    } else {
      this.router.navigate([id],{relativeTo:this.route})
    }
  }
  
  goToHome(){
    if(this.router.url !== '/'){
      this.router.navigate(['/']);
    }
  }

  toggleTheme(){
    this.themeControllerSv.toggleTheme();
    if(this.currentTheme == 'light'){
      this.currentTheme = 'dark'
    } else {
      this.currentTheme = 'light'
    }
  }

}
