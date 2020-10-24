import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './home/top-nav/top-nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { StorieNavComponent } from './home/home-page/storie-nav/storie-nav.component';
import { PostCardComponent } from './home/home-page/post-card/post-card.component';
import { SugstCardComponent } from './components/sugst-card/sugst-card.component';
import { ProfilComponent } from './home/profil/profil.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopNavComponent,
    HomePageComponent,
    SideNavComponent,
    StorieNavComponent,
    PostCardComponent,
    SugstCardComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
