import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  
  constructor(
    private route:ActivatedRoute, 
    private firestoreSv:FirestoreService
  ) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if(slug){
        this.fetchProject(slug);
      }
    })
  }

  projectRoute: string  | null = null;

  project:Project | null = null;
  loading:boolean = true;

  fetchProject(slug:string){
    this.loading = true;
    this.firestoreSv.getProjectBySlug(slug).subscribe((project) => {
      this.project = project;
      this.loading = false;
    })
  }
}
