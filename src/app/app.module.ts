import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';




import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { PostLoginComponent } from './components/post-login/post-login.component';
import { EffectuerpaiementComponent } from './components/effectuerpaiement/effectuerpaiement.component';
import { FactureFormComponent } from './components/facture-form/facture-form.component';
import { RecapitulatifComponent } from './components/recapitulatif/recapitulatif.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { NavClientComponent } from './nav-client/nav-client.component';
import { CompteComponent } from './compte/compte.component';




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    ContactComponent,
    PostLoginComponent,
    EffectuerpaiementComponent,
    FactureFormComponent,
    RecapitulatifComponent,
    ServicesComponent,
    AboutComponent,
    NavClientComponent,
    CompteComponent  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
   
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
