import { Component, Input } from '@angular/core';
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
}
