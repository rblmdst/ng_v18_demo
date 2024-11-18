import { RedirectFunction, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { HomeComponent } from './home.component';
import { EngineeringComponent } from './engineering.component';
import { BusinessComponent } from './business.component';
import { RoleService } from './role.service';
import { inject } from '@angular/core';

const redirectoToTeamPage: RedirectFunction = ({ params }) => {
  const { id } = params;
  const roleService = inject(RoleService);
  if (roleService.isBusiness(id)) {
    return `business/${id}`;
  }
  if (roleService.isEngineering(id)) {
    return `engineering/${id}`;
  }
  return `default-team/${id}`;
};

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'team/:id',
    providers: [RoleService],
    // component: TeamComponent,
    redirectTo: redirectoToTeamPage,
  },
  { path: 'default-team/:id', component: TeamComponent },
  { path: 'engineering/:id', component: EngineeringComponent },
  { path: 'business/:id', component: BusinessComponent },
];
