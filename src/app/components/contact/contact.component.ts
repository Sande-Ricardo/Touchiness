import { Component, Input } from '@angular/core';
import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'app-contact',
  standalone: false,
  // imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input() userData!:UserData;
}
