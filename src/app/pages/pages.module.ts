import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentComponent } from './resident/resident.component';
import { ResidentTableComponent } from './resident/resident-table/resident-table.component';
import { ResidentModule } from './resident/resident.module';
import { ResidentService } from '../@core/services/residentService';
import { ApiResidentService } from '../services/api.resident.service';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    //ResidentModule
  ],
  declarations: [
    PagesComponent,
    //ResidentComponent,
    //ResidentTableComponent,
    //DashboardComponent,
  ],
  providers:[
    { provide: ResidentService, useClass: ApiResidentService },
  ]
})
export class PagesModule {
}
