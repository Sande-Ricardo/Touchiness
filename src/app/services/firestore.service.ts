import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, doc, DocumentReference, Firestore, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { from, map, Observable } from 'rxjs';
import { Contact } from '../interfaces/contact';
import { UserData } from '../interfaces/user-data';
import { Project } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) {
    this.collRef = collection(this.firestore, 'userData');
    this.docRef = doc(this.firestore, 'userData', 'snPQSTLkzP8qyEPpkxlr');

    // this.docRef = doc(this.firestore, 'userData', 'oKxVEex0oXfld9IaBrkr ');
    this.collRefContact = collection(this.firestore, 'contact')
    this.docRefContact = doc(this.firestore, 'contact', '02QqpnC64TcPRSsKaOEz')
  
    this.collRefProject = collection(this.firestore, 'project')
  }

  // -------------------------------------  Variables  ---------------------------------------------

  collRef:CollectionReference;
  docRef:DocumentReference;

  collRefContact;
  docRefContact;

  collRefProject;

  // -----------------------------------------------------------------------------------------------

  createData(userData: UserData) {
    try {
      console.log("collection has been created");

      // const coll = collection(this.firestore, 'userData');
      return addDoc(this.collRef, userData);

      // return updateDoc(userDataRef, userData as any)
    }
    catch (error) {
      return console.log(error);
    }
  }

  getData(): Observable<UserData[]> {
    // getData(){
    console.log("getData()")

    return collectionData(this.collRef) as Observable<UserData[]>;

    // return onSnapshot(this.docRef, (doc) => {console.log(doc); } )
    // return getDoc(this.docRef) as unknown as Observable<UserData>;
    // return getDoc(this.docRef) as Observable<UserData>
  }

  addData(userData: UserData) {
    try {
      // const userDataRef = doc(this.firestore, 'userData', 'snPQSTLkzP8qyEPpkxlr');
      return updateDoc(this.docRef, { ...userData })
      // return updateDoc(userDataRef, userData as any)
    }
    catch (error) {
      return console.log(error);

    }
  }

  addMessage(mess: Contact): Promise<void> {
    return addDoc(this.collRefContact, mess).then(() => {
      // console.log("Mess added");
    })
  }


  getProjectBySlug(slug:string):Observable<Project | null>{
    const q = query(this.collRefProject, where('slug', '==', slug));
    return from(getDocs(q)).pipe(
      map(snapshot => {
        console.log(snapshot);
        const data = snapshot.docs[0]?.data();
        return data ? { id: snapshot.docs[0].id, ...data } as unknown as Project : null;
      })
    )
  }
}
