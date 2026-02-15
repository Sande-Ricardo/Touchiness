import { Component, computed, input, Input } from '@angular/core';
import { CloudinaryService } from '../../core/services/cloudinary.service';
import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'app-about-me',
  standalone: false,
  // imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  @Input() userData!:UserData;


  constructor(private cloudinarySv:CloudinaryService) { }

  publicId = input<string>('dpbrt2qic');

  optimizedUrlImg = computed(() => {

    const urlImg = this.cloudinarySv.getimage(this.publicId())
      .format('webp')
      .quality('auto')
      .toURL();

    console.log(urlImg);
    return urlImg
    
  });
}
