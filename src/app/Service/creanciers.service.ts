import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Creancier} from "../models/creancier.model";
import {CreanceType} from "../models/creances.model";

@Injectable({
  providedIn: 'root'
})
export class CreancierService {

  private apiUrl = 'http://localhost:8080/creanciers'; // Update the URL to match your backend server address

  constructor(private http: HttpClient) { }

  // Method to get a Creancier by ID
  getCreancierById(id: number | null): Observable<Creancier> {
    if (!id) {
      throw new Error('ID is required');
    }
    return this.http.get<Creancier>(`${this.apiUrl}/id?id=${id}`);
  }

  // Method to get all Creanciers
  getAllCreanciers(): Observable<Creancier[]> {
    return this.http.get<Creancier[]>(this.apiUrl);
  }

  // Method to get Creanciers with a specific CreanceType
  getCreanciersByType(type: CreanceType): Observable<Creancier[]> {
    return this.http.get<Creancier[]>(`${this.apiUrl}/type?type=${type}`);
  }

}
