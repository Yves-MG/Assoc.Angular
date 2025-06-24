
import { StatusProfessionnelResidentEnum } from '../../enums/enum-status-professionel';
import { StatusResidentEnum } from '../../enums/enum-status-resident';

export class Resident{
    id: string;
    name: string;
    firstName: string;
    genre: string;
    telephone: string;
    email: string;
    othersInfo: string;
    language: Date|string;
    dateOfBirth: Date|string;
    statusMatrimonial: Date|string;
    statusResident:StatusResidentEnum|string;
    isActive: boolean|string;
    statusProfessionnel: StatusProfessionnelResidentEnum|string;
    isHeberge: boolean;
    nationality:string|any;
    dateOfDayBegin: Date|string;
}
