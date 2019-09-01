import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import {MatDividerModule, MatListModule, MatCardModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SongsComponent } from './components/songs/songs.component';
import { AboutComponent } from './components/about/about.component';
import { AddsongComponent } from './components/addsong/addsong.component';

import { SongsService } from './services/songs.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SongsComponent,
    AboutComponent,
    AddsongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatListModule
  ],
  providers: [SongsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
