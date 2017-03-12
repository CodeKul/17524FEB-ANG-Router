import { DetailsGuardService } from './car/details-guard.service';
import { ProfileComponent } from './car/profile.component';
import { DetailsComponent } from './car/details.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import { Routes, RouterModule } from '@angular/router'

export const CAR_ROUTES: Routes = [
    { path: 'details', component: DetailsComponent, canActivate : [DetailsGuardService] },
    { path: 'profile', component: ProfileComponent }
];

export const PATHS: Routes = [
    { path: 'car', component: CarComponent, children: CAR_ROUTES },
    { path: 'user', redirectTo: 'user/1' },
    { path: 'user/:id', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: DashboardComponent }
];

export const AppRouter = RouterModule.forRoot(PATHS);
