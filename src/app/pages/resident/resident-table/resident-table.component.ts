import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ResidentService } from '../../../@core/services/residentService';
import { ApiTableDataSource } from '../../../@core/entity/api-table-data-source';
import { GetTableDataParam } from '../../../@core/entity/getDataTableParam';
import { HttpResponse } from '@angular/common/http';
import { Datatable } from '../../../@core/entity/data-table';
import { Resident } from '../../../@core/entity/Residents/resident';
import { DetailsResidentComponent } from '../details-resident/details-resident.component';
import { DetailButtonComponent } from '../../../shared/buttons/detail-button/detail-button.component';

@Component({
  selector: 'resident-table',
  templateUrl: './resident-table.component.html',
  styleUrls: ['./resident-table.component.scss']
})
export class ResidentTableComponent implements OnInit {


  /**
   *
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private residentService: ResidentService,
    ) {}

  ngOnInit(): void {
    this.updateResidentTable();
   
  }

  updateResidentTable(): void {
    const param = new GetTableDataParam();
    param.page = 1;
    param.pageLength = 20000;
    param.fields = [];
    param.isOrderByAsc = [];
  
    this.residentService.getAllResidents(false, param).subscribe({
      next: (response: HttpResponse<Datatable<Resident[]>>) => {
        console.log('Résidents chargés avec succès :', response);
        
        const body = response.body.data;
        this.source.setTotal(response.body.total);
        console.log('Data:', response.body.data[0]);
        const data = Array.isArray(response.body.data[0]) ? response.body.data[0] : response.body.data;
        this.source.load(data);
        //this.source.load(response.body.data[0]); // `data` est la liste des résidents
        // if (body && body.data) {
        //   this.source.load(body.data); // `data` est la liste des résidents
        // }*/
      },
      error: (err) => {
        console.error('Erreur lors du chargement des résidents :', err);
      }
    });
  }
  settings = {
    actions: {
      add: false,      // désactive le bouton "Add"
      edit: false,     // désactive l'action "Edit"
      delete: false,   // désactive l'action "Delete"
      position: 'right', // optionnel, tu peux retirer ou changer selon ton besoin
    },
    columns: {
      
      firstName: {
        title: 'Prenom',
        type: 'string',
        filter: false,

      },
      lastName: {
        title: 'Nom',
        type: 'string',
        filter: true,

      },
      phoneNumber: {
        title: 'Telephone',
        type: 'string',
        filter: false,

      },
      email: {
        title: 'E-mail',
        type: 'string',
        filter: false,

      },
      actions: {
        title: 'Actions',
        type: 'custom',
        renderComponent: DetailButtonComponent,
        filter: false,
        sort: false
      }
    },
  };
  //source: LocalDataSource = new LocalDataSource();
  source: ApiTableDataSource = new ApiTableDataSource();


  onAdd(){
    this.router.navigate(['pages/resident/form-resident']);
   
  }

}
