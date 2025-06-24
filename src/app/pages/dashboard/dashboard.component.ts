import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent{
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }
  statusCards: string;

}
