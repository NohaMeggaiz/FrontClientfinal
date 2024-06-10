import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CreanceFormDTO} from "../models/creancieForm.model";

@Injectable({
  providedIn: 'root'
})
export class CreanceService {

  private apiUrl = 'http://localhost:8080/getforms'; // Update the URL to match your backend server address

  constructor(private http: HttpClient) { }

  // Method to get a Creancier by ID
  getCreancierById(id: number | null): Observable<CreanceFormDTO> {
    if (!id) {
      throw new Error('ID is required');
    }
    return this.http.get<CreanceFormDTO>(`${this.apiUrl}?id=${id}`);
  }

}
