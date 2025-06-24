import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentComponent } from './resident/resident.component';
import { FormResidentComponent } from './resident/form-resident/form-resident.component';
import { DetailsResidentComponent } from './resident/details-resident/details-resident.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
 children: [
  {
    path: 'dashboard',
    //canActivate: [IsAgenceGuard],
    component: DashboardComponent,
  },
  {
    path: 'resident',
    //canActivate: [IsAgenceGuard],
    component: ResidentComponent,
  },
  {
    path: 'resident/form-resident',
    //canActivate: [IsAgenceGuard],
    component: FormResidentComponent,
  },
  {
    path: 'resident/details',
    //canActivate: [IsAgenceGuard],
    component: DetailsResidentComponent,
  }
 ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
