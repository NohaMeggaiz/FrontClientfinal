import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface TransactionRequest {
  numTel: string;
  creancierCode: string;
  montant: number;
}

interface TransactionResponse {
  // Define the expected response structure based on your backend
  client_source: any;
  creancier_dest: any;
  montant: number;
  date_transaction: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = "https://lbackend-jibi.onrender.com/transactions"

  constructor(private http: HttpClient) { }

  makeTransaction(request: TransactionRequest): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(`${this.apiUrl}/make`, request);
  }
}
