import {CreanceType} from "./creances.model";

export interface CreanceFormDTO {
  id: number;
  name: string;
  creancetype: CreanceType;
  formFieldsJSON: string;
  creancierName: string;
  creancierLogo: string;
}
