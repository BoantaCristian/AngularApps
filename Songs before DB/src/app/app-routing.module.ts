import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './components/songs/songs.component';
import { AboutComponent } from './components/about/about.component';
import { AddsongComponent } from './components/addsong/addsong.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'addsong',
    component: AddsongComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
