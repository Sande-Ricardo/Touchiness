import { Component, Input } from '@angular/core';
import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'app-skills',
  standalone: false,
  // imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() userData!:UserData;
}
