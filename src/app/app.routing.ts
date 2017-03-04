import { CarComponent } from './car/car.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';

import {Routes, RouterModule} from '@angular/router'

export const PATHS : Routes = [
    {path :'', component : DashboardComponent},
    {path : 'user', component : UserComponent},
    {path : 'car', component : CarComponent}    
];

export const AppRouter = RouterModule.forRoot(PATHS,{initialNavigation : true});