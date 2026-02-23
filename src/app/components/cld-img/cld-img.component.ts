import { Component, computed, input } from '@angular/core';
import { CloudinaryModule } from '@cloudinary/ng';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { CloudinaryService } from '../../core/services/cloudinary.service';

@Component({
  selector: 'app-cld-img',
  standalone: true,
  imports: [CloudinaryModule],
  template: `
    <div class="image-container">
      <advanced-image
        [cldImg]="procecedImage()"
        [alt]="altText()">
      </advanced-image>
    </div>
  `,
  styles: [`
    *{
      margin: 0;
      padding: 0;
    }
    .image-container {
      display: block;
    }
    advanced-image {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  `]
})
export class CldImgComponent {
  constructor(private cloudinarySv:CloudinaryService) { }

  publicId = input.required<string>();
  altText = input<string>('Generic Image');
  width = input<number>(300);
  height = input<number>(300);

  procecedImage = computed(() => {
    return this.cloudinarySv.getimage(this.publicId())
      .format('auto')
      .quality('auto')
      .resize(fill().width(this.width()).height(this.height()));
  })

}

