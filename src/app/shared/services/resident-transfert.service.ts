import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidentTransfertService {
  private residentData: any;
  constructor() { }
  setResident(data: any) {
    this.residentData = data;
  }
  getResident() {
    return this.residentData;
  }
  clear() {
    this.residentData = null;
  }
}
