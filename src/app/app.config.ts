import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(
      {
        "projectId":"portfolio-ang-01",
        "appId":"1:815202224913:web:1037d06b7f96f27d5edab0",
        "databaseURL":"https://portfolio-ang-01-default-rtdb.firebaseio.com",
        "storageBucket":"portfolio-ang-01.appspot.com",
        "apiKey":"AIzaSyDRqAfzsNjmgfb6mBGv8cC7WO7gOOjxx_M",
        "authDomain":"portfolio-ang-01.firebaseapp.com",
        "messagingSenderId":"815202224913",
        "measurementId":"G-NN1B9436WN"
      }
    )),
    provideFirestore(() => getFirestore())]
};
