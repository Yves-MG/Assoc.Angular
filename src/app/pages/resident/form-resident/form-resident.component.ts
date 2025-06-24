import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../@core/data/countryService';
import { StatusResidentEnum } from '../../../@core/enums/enum-status-resident';
import { StatusProfessionnelResidentEnum } from '../../../@core/enums/enum-status-professionel';

@Component({
  selector: 'ngx-form-resident',
  templateUrl: './form-resident.component.html',
  styleUrls: ['./form-resident.component.scss']
})
export class FormResidentComponent implements OnInit {

  statuses = Object.entries(StatusResidentEnum).map(([key, value]) => ({
    label: key.replace('_', ' ').toLowerCase(), // ou un autre formatage
    value
  }));

  statusPro = Object.entries(StatusProfessionnelResidentEnum).map(([key, value]) => ({
    label: key.replace('_', ' ').toLowerCase(), // ou un autre formatage
    value
  }));
  statusProfessionnel: string = '';
  selectedStatusResident: string = '';
  nationalities: string[] = [];
  radioGroupValue = 'This is value 2';
  genre = 'Masculin';
  maritalStatus: string = '';
  //selectedStatusResident: StatusResidentEnum = StatusResidentEnum.REFUSE;  // valeur par défaut

  strudios = [
    { id: 1, name: 'Etudes supérieures' },
    { id: 2, name: 'Etudes secondaires' },
    { id: 3, name: 'Etudes primaires' },
    { id: 4, name: 'Pas d\'études' }
  ];
  selectedStrudios: string = '';
  selectedNationality: string = '';
  searchText:string='';
  constructor(private countryService: CountryService) {}
  ngOnInit(): void {

    this.countryService.getNationalities().subscribe(data => {
    this.nationalities = data;
  });
  }


  onDateOfBirthChange(event: any) {

  }
  onMaritalStatusChange(status: string) {
    console.log('Statut sélectionné:', status);
    // Vous pouvez ici gérer la logique liée au statut
  }

  onDateOfDayBeginChange(status: string) {
    console.log('Statut sélectionné:', status);
    // Vous pouvez ici gérer la logique liée au statut
  }

  onStatusChange(newStatuses: StatusResidentEnum) {
    console.log('Statuts sélectionnés :', newStatuses);
  }

  onStatusProfessionelChange(newStatuses: StatusProfessionnelResidentEnum) {
    console.log('Statuts sélectionnés :', newStatuses);
  }

  onStudioProfessionelChange(newStatuses: StatusProfessionnelResidentEnum) {
    console.log('Statuts sélectionnés :', newStatuses);
  }
}
