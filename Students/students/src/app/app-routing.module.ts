import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { ManageComponent } from './components/manage/manage.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateComponent},
  {path: 'manage', component: ManageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
