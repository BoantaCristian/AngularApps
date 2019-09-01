import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewplayerComponent } from './components/newplayer/newplayer.component';
import { ManageplayersComponent } from './components/manageplayers/manageplayers.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'newplayer', component: NewplayerComponent},
  {path: 'manageplayers', component: ManageplayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
