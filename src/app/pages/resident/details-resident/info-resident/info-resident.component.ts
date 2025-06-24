import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-resident',
  templateUrl: './info-resident.component.html',
  styleUrls: ['./info-resident.component.scss']
})
export class InfoResidentComponent implements OnInit {
 @Input() resident: any;
  residentInfoList:any[] = [];
   constructor(private datePipe: DatePipe) {}
  ngOnInit() {
    console.log("eto",this.resident);
    this.residentInfoList = [
  { label: 'Prénom', value: this.resident.firstName },
  { label: 'Nom', value: this.resident.lastName },
  { label: 'Téléphone', value: this.resident.phoneNumber },
  { label: 'Email', value: this.resident.email },
  { label: 'Genre', value: this.resident.genre },
  { label: 'Date de naissance', value: this.datePipe.transform(this.resident.birthDate, 'dd/MM/yyyy') },
  { label: 'Nationalité', value: this.resident.nationality },
  { label: 'Adresse', value: this.resident.address },
  { label: 'Ville', value: this.resident.city },
  { label: 'Date d’entrée', value: this.datePipe.transform(this.resident.entryDate, 'dd/MM/yyyy') },
  { label: 'Date de sortie', value: this.datePipe.transform(this.resident.exitDate, 'dd/MM/yyyy') },
  { label: 'Statut administratif', value: this.resident.administrativeStatus },
];

  }

}
