import { Component, Input, OnInit } from '@angular/core';
import { ResidentService } from '../../../@core/services/residentService';
import { ResidentTransfertService } from '../../../shared/services/resident-transfert.service';

@Component({
  selector: 'ngx-details-resident',
  templateUrl: './details-resident.component.html',
  styleUrls: ['./details-resident.component.scss']
})
export class DetailsResidentComponent implements OnInit {
  
  resident :any;
  constructor(private transferResident: ResidentTransfertService) {
  }
  ngOnInit(): void {
    this.resident = this.transferResident.getResident();
    console.log('Détails du résident :', this.resident);
    if (!this.resident) {
      // Redirige ou affiche un message si l'objet n'est pas disponible
      console.error('Aucun résident transmis');
    }
  }



}
