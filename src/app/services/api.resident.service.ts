import { HttpClient, HttpResponse } from "@angular/common/http";
import { ResidentService } from "../@core/services/residentService";
import { GetTableDataParam } from "../@core/entity/getDataTableParam";
import { Observable } from "rxjs";
import { Datatable } from "../@core/entity/data-table";
import { Resident } from "../@core/entity/Residents/resident";
import { ApiService } from "../@core/services/api.service";
import { NbToastrService } from "@nebular/theme";
import { environment } from "../environments/environment";
import { catchError, map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiResidentService extends ResidentService {
  getAllResidents(showErrorNotif: boolean, getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Resident>>> | Observable<never>> {
    
    
    
    return this.apiService.post<Datatable<Array<Resident>>>(environment.get_all_resident_uri, getTableDataParam).pipe(
        map((x: HttpResponse<Datatable<Array<Resident>>>) => {

          console.log("xxxxxxxxxxx", x);
          
          if (showErrorNotif && x.status == 202) {
            this.toastrService.danger(x.body, "Erreur");
            throw new Error(x.body.toString());
          }
          return x;
        }),
        catchError(error => {
          console.log("tsy emmmmmmmmmmmmmmmmmm");
          
          if (error instanceof (Error)) {
            throw new Error(error.message);
          } else {
            if (showErrorNotif) {
              this.toastrService.danger(error, "Erreur");
            }
            throw new Error(error);
          }
        })
      );
  }
  getResidentById(id: string): Promise<any> {
      throw new Error("Method not implemented.");
  }
  createResident(resident: any): Promise<any> {
      throw new Error("Method not implemented.");
  }
  updateResident(id: string, resident: any): Promise<any> {
      throw new Error("Method not implemented.");
  }
  deleteResident(id: string): Promise<any> {
      throw new Error("Method not implemented.");
  }
  constructor(private apiService: ApiService, private toastrService: NbToastrService) {
    super();
  }
}

   