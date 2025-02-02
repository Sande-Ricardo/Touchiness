import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrl: './background.component.css'
})
export class BackgroundComponent implements OnInit{
  stars: any[] = [];
  fade: number[] = [];

  ngOnInit(): void {
    this.generateStars(30); // Genera 100 estrellas
  }

  generateStars(count: number): void {
    for (let i = 0; i < count; i++) {
      const star = {
        size: Math.random() * 3 + 1, // Tamaño entre 1px y 4px
        duration: Math.random() * 5 + 2, // Duración entre 2s y 7s
        // duration: 15,
        delay: Math.random() * 5, // Retraso entre 0s y 5s
        startX: Math.random() * 100, // Posición inicial horizontal (0% a 100%)
        startY: Math.random() * 100 // Posición inicial vertical (0% a 100%)
      };
      this.fade.push(star.size)
      this.stars.push(star);
    }
    console.log(this.fade);
    
  }

  getStarStyle(star: any): any {
    return {
      width: `${star.size}px`,
      height: `${star.size}px`,
      left: `${star.startX}vw`,
      top: `${star.startY}vh`,
      animationDuration: `${star.duration}s`,
      animationDelay: `${star.delay}s`
    };
  }
}
