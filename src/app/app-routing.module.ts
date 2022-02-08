import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AccountComponent} from "./account/account.component";
import {AuthGuard} from "./guard/auth.guard";
import {ContactComponent} from "./contact/contact.component";
import {OfferComponent} from "./offer/offer.component";
import {GalleryComponent} from "./gallery/gallery.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oferta', component: OfferComponent},
  // {path: 'konto', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'galeria', component: GalleryComponent},
  {path: 'kontakt', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
