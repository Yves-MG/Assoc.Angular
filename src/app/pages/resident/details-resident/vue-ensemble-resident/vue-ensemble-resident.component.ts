import { Component } from '@angular/core';

@Component({
  selector: 'vue-ensemble-resident',
  templateUrl: './vue-ensemble-resident.component.html',
  styleUrls: ['./vue-ensemble-resident.component.scss']
})
export class VueEnsembleResidentComponent {
dossier = {
    reference: '173',
    statut: 'Actif',
    type: 'Renouvellement',
    echeance: '06 mai 2026',
    dernierPassage: '25 juin 2025',
    premiereDomiciliation: '26 juillet 2023',
    ayantDroit: 1,
    referent: 'Aucun référent',
    historique: [
      {
        date: '25 juin 2025 à 10:49',
        contenu: '1 courrier remis'
      }
    ]
  };
  courrierAttente = {
    courriers: 0,
    colis: 0,
    avisPassage: 0
  };
}
