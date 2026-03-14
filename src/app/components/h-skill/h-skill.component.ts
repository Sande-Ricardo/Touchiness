import { Component, effect, input, Input } from '@angular/core';
import { CloudinaryService } from '../../core/services/cloudinary.service';

@Component({
  // standalone: true,
  // imports: [],
  selector: 'app-h-skill',
  templateUrl: './h-skill.component.html',
  styleUrl: './h-skill.component.css'
})
export class HSkillComponent {

  constructor(cloudinarySv:CloudinaryService) {
    effect(() => {
      const logo = this.$logo();
      if(!logo) return;

      this.logoUrl = 'https://res.cloudinary.com/'+ cloudinarySv.cloudName +'/image/upload/fl_sanitize/v1772232980/'+ logo;
      console.log(this.logoUrl);
    })
  }

  $logo = input<String>('');

  @Input() logo!:String;
  @Input() ttl!:String;
  @Input() desc!:String;

  logoUrl: string = '';

}
