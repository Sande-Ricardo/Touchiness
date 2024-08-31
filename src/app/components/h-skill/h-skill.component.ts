import { Component, Input } from '@angular/core';

@Component({
  // standalone: true,
  // imports: [],
  selector: 'app-h-skill',
  templateUrl: './h-skill.component.html',
  styleUrl: './h-skill.component.css'
})
export class HSkillComponent {

  @Input() logo!:String;
  @Input() ttl!:String;
  @Input() desc!:String;

}
