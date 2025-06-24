import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';




@NgModule({
  
  declarations: [DashboardComponent,
  ],
  
 
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
  ]
})
export class DashboardModule { }
