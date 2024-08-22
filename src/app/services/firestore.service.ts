import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/user-data';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore:Firestore) { 
    this.collRef = collection(this.firestore, 'userData');
    this.docRef = doc(this.firestore, 'userData', 'snPQSTLkzP8qyEPpkxlr');
  }

  // -------------------------------------  Variables  ---------------------------------------------

  collRef;
  docRef;
  
  // -----------------------------------------------------------------------------------------------

  createData(userData:UserData){
    try{
      console.log("collection has been created");
      
      // const coll = collection(this.firestore, 'userData');
      return addDoc(this.collRef, userData);
  
      // return updateDoc(userDataRef, userData as any)
    }
    catch (error){
      return console.log(error);
    }
  }

  getData() :Observable<UserData[]>{
  // getData(){
    console.log("getData()")
    
    return collectionData(this.collRef) as Observable<UserData[]>;

    // return onSnapshot(this.docRef, (doc) => {console.log(doc); } )
    // return getDoc(this.docRef) as unknown as Observable<UserData>;
    // return getDoc(this.docRef) as Observable<UserData>
  }

  addData(userData:UserData){
    try{
      // const userDataRef = doc(this.firestore, 'userData', 'snPQSTLkzP8qyEPpkxlr');
      return updateDoc(this.docRef, {...userData} )
      // return updateDoc(userDataRef, userData as any)
    }
    catch (error){
      return console.log(error);
      
    }
  }

}
