import { CheckingService } from './car/checking.service';
import { DetailsGuardService } from './car/details-guard.service';
import { AppRouter } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './car/details.component';
import { ProfileComponent } from './car/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CarComponent,
    DashboardComponent,
    LoginComponent,
    DetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter
  ],
  providers: [DetailsGuardService, CheckingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
