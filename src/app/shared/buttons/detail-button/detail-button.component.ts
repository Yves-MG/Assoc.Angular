import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidentTransfertService } from '../../services/resident-transfert.service';

@Component({
  selector: 'ngx-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.scss']
})
export class DetailButtonComponent  {
  @Input() rowData: any;

  onViewDetails(){

  }

  constructor(
    private router: Router,
    private transferService: ResidentTransfertService,
  ) {}

  goToDetails() {
    console.log('Row data:', this.rowData);
    
    this.transferService.setResident(this.rowData);
    this.router.navigate(['/pages/resident/details']);
  }
}
