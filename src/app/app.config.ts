import { ApplicationConfig, importProvidersFrom, Injectable, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClient, provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { routes } from './app.routes';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig  {
  override overrides ={
    swipe:{direction:6}
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
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
    provideFirestore(() => getFirestore()),
    importProvidersFrom([
      HammerModule,
      MarkdownModule.forRoot(
        {loader: HttpClient}
      )
    ]),
    {provide:HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}
  ]
};

