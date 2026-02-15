import { Injectable } from '@angular/core';
import { Cloudinary } from '@cloudinary/url-gen';

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {
  readonly cld:Cloudinary;

  constructor() { 
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dpbrt2qic'
      }
    });
    console.log("Cloudinary inicialized");
    
  }

  getimage(publicId:string) {
    return this.cld.image(publicId);
  }
}
