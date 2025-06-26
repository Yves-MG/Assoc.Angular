import { Component } from '@angular/core';

@Component({
  selector: 'dossiers-resident',
  templateUrl: './dossiers-resident.component.html',
  styleUrls: ['./dossiers-resident.component.scss']
})
export class DossiersResidentComponent {
documents = [
    {
      type: 'word',
      name: 'Attestation postale',
      addedBy: 'DOMIFA',
      addedDate: '27 septembre 2022',
      downloadLink: '#'
    },
    {
      type: 'word',
      name: 'Cerfa d’attestation d’élection de domicile',
      addedBy: 'DOMIFA',
      addedDate: '27 septembre 2022',
      downloadLink: '#'
    }
  ];
}
