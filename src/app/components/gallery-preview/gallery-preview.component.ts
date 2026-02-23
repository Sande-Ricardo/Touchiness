import { Component, input } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { ImgDetail } from '../../interfaces/project';

@Component({
  selector: 'app-gallery-preview',
  standalone: true,
  imports: [HammerModule],
  templateUrl: './gallery-preview.component.html',
  styleUrl: './gallery-preview.component.css'
})
export class GalleryPreviewComponent {

  constructor() {}
  $images = input<ImgDetail[]>([]);


  selectedIndex: number = 0;
  watchFull: boolean = false;

  next() {
    const total = this.$images().length;
    if (total <= 0) return;
    this.selectedIndex = (this.selectedIndex + 1) % total;
  }

  previous() {
    const total = this.$images().length;
    if (total <= 0) return;
    this.selectedIndex = (this.selectedIndex - 1 + total) % total;
  }

  openFullscreen() {
    if (this.$images().length > 0) {
      this.watchFull = true;
    }
  }

  onSwipe(event: any) {
    // Ignoramos gestos accidentales muy pequeños
    if (Math.abs(event.deltaX) > 30) {
      event.deltaX > 0 ? this.previous() : this.next();
    }
  }
}
