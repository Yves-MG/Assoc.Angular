import { HttpResponse } from "@angular/common/http";
import { Datatable } from "../entity/data-table";
import { GetTableDataParam } from "../entity/getDataTableParam";
import { Resident } from "../entity/Residents/resident";
import { Observable } from "rxjs";

export abstract class ResidentService {
  abstract getAllResidents(showErrorNotif: boolean,getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Resident>>> | Observable<never>>;
  // abstract getResidentById(id: string): Promise<any>;
  // abstract createResident(resident: any): Promise<any>;
  // abstract updateResident(id: string, resident: any): Promise<any>;
  // abstract deleteResident(id: string): Promise<any>;
}
//abstract getAllClientAgence(showErrorNotif: boolean, getTableDataParam: GetTableDataParam): Observable<HttpResponse<Datatable<Array<Client>>> | Observable<never>>;
