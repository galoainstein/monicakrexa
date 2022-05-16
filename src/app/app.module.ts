import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColorModule } from './color/color.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { DataFormModule } from './data-form/data-form.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { SustainabilityComponent } from './sustainability/sustainability.component';
import { WorldComponent } from './world/world.component';
import { SinglePageComponent } from './single-page/single-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABqjHHAor3-4JnxFkcor9l-fCVFSMKn_s",
  authDomain: "monicakrexa-a4af2.firebaseapp.com",
  projectId: "monicakrexa-a4af2",
  storageBucket: "monicakrexa-a4af2.appspot.com",
  messagingSenderId: "569339214058",
  appId: "1:569339214058:web:feb61965c8394cd42c3f93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistComponent,
    SustainabilityComponent,
    WorldComponent,
    SinglePageComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorModule,
    SharedModule,
    DataFormModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
