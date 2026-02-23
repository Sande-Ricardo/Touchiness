import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuxiliarLayout, Layout } from '../../interfaces/layout';
import { Project } from '../../interfaces/project';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  
  $project = signal<Project | null>(null);

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


  layoutData:Layout[] = [{title:'Home', url:'../', isById:false}];
  auxiliarLayoutData:AuxiliarLayout[] = [{url:'../../', iconUrl:'', alt:'', isById:false}];

  projectRoute: string  | null = null;

  loading:boolean = true;

  fetchProject(slug:string){
    this.loading = true;
    this.firestoreSv.getProjectBySlug(slug).subscribe((project) => {
      this.$project.set(project);
      this.loading = false;
      
      console.log(project);
      console.log(this.$project());
    })
  }
}
