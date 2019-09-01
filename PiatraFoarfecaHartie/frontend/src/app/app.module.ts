import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { PlayerService } from './services/player.service'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewplayerComponent } from './components/newplayer/newplayer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatSelectModule, MatListModule, MatTableModule, MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';
import { ManageplayersComponent } from './components/manageplayers/manageplayers.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewplayerComponent,
    ManageplayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatListModule,
    MatSelectModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
