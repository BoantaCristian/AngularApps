import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ManageComponent } from './components/manage/manage.component';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { StudentsService } from './services/students.service'

import { MatToolbarModule, MatSliderModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material'

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
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
