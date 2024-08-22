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
      aboutMeImg:null,
      aboutMeTitle: "Web Develloper",
      aboutMeText: "Emmm",
      
      skillImg:null,
      skillTitle:["skill 1"],
      skillText:["python"],

      skillSoft:["proactivity"],

      projectImg:null,
      projectTitle:["calculato"],
      projectText:["lorem"],
    };

    this.firestoreService.createData(user)
  }

  obtenerPrueba(){
    return this.firestoreService.getData();
  }
}
