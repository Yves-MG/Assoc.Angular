import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule, NbIconModule, NbInputModule,NbSelectModule , NbRadioModule, NbTreeGridModule, NbDatepickerModule, NbButton, NbButtonModule, NbTabsetModule } from '@nebular/theme';
import { ResidentTableComponent } from './resident-table/resident-table.component';
import { ResidentComponent } from './resident.component';
import { FormResidentComponent } from './form-resident/form-resident.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DetailsResidentComponent } from './details-resident/details-resident.component';
import { InfoResidentComponent } from './details-resident/info-resident/info-resident.component';



@NgModule({
  declarations: [ResidentComponent, ResidentTableComponent, FormResidentComponent, DetailsResidentComponent, InfoResidentComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    Ng2SmartTableModule,
    RouterModule,
    NbRadioModule,
    FormsModule,
    NbTabsetModule,
    //NgSelectModule ,
    NbSelectModule ,
    NbDatepickerModule,
    NbButtonModule
  ]
})
export class ResidentModule { }
