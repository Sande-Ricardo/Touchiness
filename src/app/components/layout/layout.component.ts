import { Component } from '@angular/core';
import { ThemeControllerService } from '../../core/services/theme-controller.service';

@Component({
  selector: 'app-layout',
  standalone: false,
  // imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(public themeControllerSv:ThemeControllerService){
    this.currentTheme = this.themeControllerSv.getCurrentTheme();
  }
  currentTheme: 'light' | 'dark';

  goTo(id:string){
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
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
