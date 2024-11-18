import { Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { HomeComponent } from './home.component';
import { EngineeringComponent } from './engineering.component';
import { BusinessComponent } from './business.component';
import { RoleService } from './role.service';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'team/:id',
    providers: [RoleService],
    component: TeamComponent,
  } /* ,
  { path: 'engineering/:id', component: EngineeringComponent },
  { path: 'business/:id', component: BusinessComponent }, */,
];
