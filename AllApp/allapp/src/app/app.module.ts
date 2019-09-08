import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { PersonService } from './services/person.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';

import { MatToolbarModule, MatSliderModule, MatSelectModule, MatInputModule, MatDividerModule, MatCardModule, MatButtonModule, MatListModule } from '@angular/material';
import { ManageComponent } from './components/manage/manage.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
