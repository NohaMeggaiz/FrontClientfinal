import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../Service/login.service';
import { TransactionRequest } from '../models/TransactionRequest';

@Injectable({
  providedIn: 'root'
})
export class PayementService {


  private apiUrl = 'http://localhost:8090/transactions/make'; // Update this URL to your actual endpoint

  constructor(private http: HttpClient,private loginService: LoginService,
  ) { }

 

  makeTransaction(request: TransactionRequest): Observable<TransactionRequest> {
    return this.http.post<TransactionRequest>(this.apiUrl, request);
  }

  private baseUrl = 'http://localhost:8090/api';

 


  getCompteSolde(clientId: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/client/${clientId}/compte/solde`);
  }

  getClientById(clientId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/client/${clientId}`);
  }
}
