import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './../admin/admin-routing.module';
import { AdminAuthGuard } from './../admin/services/admin-auth-guard.service';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../shared/services/auth.service';
import { SharedModule } from './../shared/shared.module';
import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule,
    AdminRoutingModule,
    RouterModule.forChild([])
  ],
  declarations: [
    BsNavbarComponent,
    HomeComponent,
    LoginComponent   
  ],
  exports: [
    BsNavbarComponent
  ],
  providers: [
    AuthService,
    AdminAuthGuard
  ]
})
export class CoreModule { }
