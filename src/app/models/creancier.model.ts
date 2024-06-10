import {Creance} from "./creances.model";
export interface Creancier {
  id?: number;
  name?: string;
  logo?: string;
  categorieCreancier?: CreancierType;
  creances?: Creance[];
}
export enum CreancierType {
  OPERATEUR = 'OPERATEUR',
  UTILITY = 'UTILITY',
  ASSOCIATION = 'ASSOCIATION'
}
