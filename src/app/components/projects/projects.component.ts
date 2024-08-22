import { Component, Input } from '@angular/core';
import { UserData } from '../../interfaces/user-data';

@Component({
  selector: 'app-projects',
  standalone: false,
  // imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() userData!:UserData;

}
