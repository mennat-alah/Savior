import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { signInAComponent } from './signIn-Authority/signInA.component'
import { signInIComponent } from './signIn-Individual/signInI.component'
import { signUpAComponent } from './signUp-Authority/signUpA.component'
import { signUpIComponent } from './signUp-Individual/signUpI.component'
// import {profileIComponent} from './profil-Individual/profileI.component'
import { EditAComponent } from './Edit-profile-Authority/EditA.component'

const routes: Routes = [
  { path: '' ,redirectTo: 'home' , pathMatch: 'full' },
  { path: 'home', component:HomeComponent},
  { path: 'signInA', component:signInAComponent},
  { path: 'signInI', component:signInIComponent},
  { path: 'signUpA', component:signUpAComponent},
  { path: 'signUpI', component:signUpIComponent},
  // { path: 'profileI', component:profileI.component}
  { path: 'editA', component:signUpIComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
