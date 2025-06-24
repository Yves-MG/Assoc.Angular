import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule
} from '@nebular/theme';
import { AuthRoutingModule } from './auth-routing';
import { AuthComponent } from './auth.component';


@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    AuthRoutingModule,
    NbSpinnerModule,
    NbAuthModule,
  ],
  declarations: [
    AuthComponent,
  ],
})
export class AuthModule { }
