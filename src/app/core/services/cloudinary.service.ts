import { Injectable } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  readonly cld:Cloudinary;

  cloudName:string = 'dpbrt2qic';

  constructor() {
    this.cld = new Cloudinary({
      cloud: {
        cloudName: this.cloudName
      }
    });
    console.log("Cloudinary inicialized");
    
  }

  getimage(publicId:string) {
    return this.cld.image(publicId);
  }
}
