import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BodyComponent } from './components/body/body.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { GiftorderComponent } from './components/giftorder/giftorder.component';


const routes: Routes = [
  { path:'body', component: BodyComponent},
  { path:'main', component: MainComponent},
  { path:'aboutus', component: AboutusComponent},
  { path:'contact', component: ContactusComponent},
  { path:'giftorder', component: GiftorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
