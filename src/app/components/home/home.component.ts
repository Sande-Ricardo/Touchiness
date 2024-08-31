import { Component } from '@angular/core';
import { UserData } from '../../interfaces/user-data';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-home',
  standalone: false,
  // imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  ngOnInit():void{
    this.firestoreService.getData().subscribe(
      (data:UserData[]) => {
        try{
          this.userData = data[0];
        } catch (err) {
          console.log(err);
        }
      }
    )
  }
  constructor(
    private firestoreService:FirestoreService
  ){}

  // -------------------------------------  Variables  ---------------------------------------------

  userData!:UserData;
  
  // -----------------------------------------------------------------------------------------------
  

  crearUserData(){
    const user:UserData = {
      aboutMeImg: '',
      aboutMeTitle: "Desarrollador",
      aboutMeText: "Soy Sande Ricardo, un desarrollador web full-stack en constante aprendizaje, apasionado por crear soluciones digitales innovadoras. Con un enfoque en el backend, disfruto construyendo las bases sólidas de aplicaciones web escalables y eficientes.",
      
      skillHImg:[
        'hSkills/typescript.svg',
        'hSkills/angular.svg',
        'hSkills/javascript.svg',
        'hSkills/bootstrap.svg',
        'hSkills/html.svg',
        'hSkills/css.svg'
      ],
      skillHTitle:["TypeScript","Angular","JavaScript","Bootstrap","HTML","CSS"],
      skillHText:["python"],

      skillSImg:[
        'hSkills/java.svg',
        'hSkills/springboot.svg',
        'hSkills/ruby.svg',
        'hSkills/mysql.svg',
        'hSkills/python.svg',
        'hSkills/github.svg',
        'hSkills/netlify.svg',
        'hSkills/xamp.svg'
      ],
      skillSTitle:["Java","SpringBoot","Ruby","MySQL","Python","Git","Netlify","XAMP"],
      skillSText:["python"],

      skillSoft:["proactivity"],

      projectImg: null,
      projectTitle:["calculato"],
      projectText:["lorem"],
    };

    this.firestoreService.createData(user)
  }

  obtenerPrueba(){
    return this.firestoreService.getData();
  }

  obtenerdata(){
    console.log(this.userData)
  }
}
