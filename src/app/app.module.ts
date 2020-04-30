import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentification/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil/acceuil.component';
import { MenuComponent } from './acceuil/menu/menu.component';
import { DropdownModule } from 'primeng';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DepartementComponent } from './user/departement/departement.component';
import { AgenceComponent } from './user/agence/agence.component';
import { EmployeComponent } from './user/employe/employe.component';
import { ArchiveComponent } from './user/archive/archive.component';
import { CompteComponent } from './user/compte/compte.component';
import { FooterComponent } from './acceuil/footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'acceuil', component: MenuComponent
  },
  {
    path: 'agence', component: AgenceComponent
  },
  {
    path: 'archive', component: ArchiveComponent
  },
  {
    path: 'compte', component: CompteComponent
  },
  {
    path: 'departement', component: DepartementComponent
  },
  {
    path: 'employe', component: EmployeComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    MenuComponent,
    DepartementComponent,
    AgenceComponent,
    EmployeComponent,
    ArchiveComponent,
    CompteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
