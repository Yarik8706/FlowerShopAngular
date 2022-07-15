import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes} from "@angular/router";
import { UnitComponent } from './unit/unit.component';
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InformationCardComponent } from './information-card/information-card.component';
import {MatCardModule} from "@angular/material/card";
import {MatTreeModule} from "@angular/material/tree";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsGroupComponent } from './cards-group/cards-group.component';
import {InformationCardsService} from "./information-cards.service";
import { TransitionToInformationComponent } from './transition-to-information/transition-to-information.component';
import { InformationProductComponent } from './information-product/information-product.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import { GetUserImageComponent } from './get-user-image/get-user-image.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

// TODO host firebase deploy --only hosting:florans39

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'about-us', component: AboutUsComponent},
  {
    path: 'all-products',
    component: CardsGroupComponent,
    children: [{
      path: '**',
      component: CardsGroupComponent
    }]
  },
  {
    path: 'product',
    children: [{
      path: '**',
      component: InformationProductComponent
    }]
  },
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    UnitComponent,
    InformationCardComponent,
    AboutUsComponent,
    CardsGroupComponent,
    TransitionToInformationComponent,
    InformationProductComponent,
    AdminPanelComponent,
    GetUserImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTreeModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule
  ],
  bootstrap: [AppComponent],
  providers: [InformationCardsService]
})
export class AppModule { }
