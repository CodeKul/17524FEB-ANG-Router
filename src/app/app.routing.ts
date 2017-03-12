import { ProfileComponent } from './car/profile.component';
import { DetailsComponent } from './car/details.component';
import { LoginComponent } from './login/login.component';
import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import {Routes, RouterModule} from '@angular/router'

export const CAR_ROUTES : Routes = [
    {path :'details', component : DetailsComponent},
    {path : 'profile', component : ProfileComponent}
];

export const PATHS : Routes = [
    {path :'', component : DashboardComponent},
    {path : 'user/:id', component : UserComponent},
    {path : 'car', component : CarComponent, children : CAR_ROUTES},
    {path : 'login', component : LoginComponent},    
];

export const AppRouter = RouterModule.forRoot(PATHS);
