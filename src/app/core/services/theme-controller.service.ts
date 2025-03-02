import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeControllerService {

  private currentTheme: 'dark' | 'light' = 'dark';
  private darkBgImg = new Image();
  private lightBgImg = new Image();


  constructor() {
this.darkBgImg.src = '/img/Back1.webp'
this.lightBgImg.src = '/img/Back2.webp'

    let savedTheme = localStorage.getItem('theme')
    if(savedTheme){
      this.setTheme(savedTheme as 'dark' | 'light')
    }
  }

  setTheme(theme:'dark' | 'light'){
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }

  toggleTheme(){
    this.setTheme(this.currentTheme == 'dark' ? 'light' : 'dark');
  }

  getCurrentTheme():'dark' | 'light' {
    return this.currentTheme;
  }
}
