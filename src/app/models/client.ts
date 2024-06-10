import {Compte} from "./compte";

export class Client {
  id_user?: number;

  nom?:String;
  prenom?: String;
  numTel?: String;
  email?:String;
  password?: String;

  compte?: Compte;
  role?: String;
}
