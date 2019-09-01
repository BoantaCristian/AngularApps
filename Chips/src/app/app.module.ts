import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatButtonModule, MatSelectModule, MatCardModule, MatExpansionModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BagComponent } from './components/bag/bag.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ChipsService } from './services/chips.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BagComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [ChipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
