import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const AUTH_API = 'https://lbackend-jibi.onrender.com/api/auth/';
const ClientURL = 'https://lbackend-jibi.onrender.com/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const changePasswordUrl = 'https://lbackend-jibi.onrender.com/api/changePassword';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'clientLogin', {
      username,
      password
    }, httpOptions).pipe(
      tap((response: any) => {
        // Store token and client ID in localStorage
        localStorage.setItem('authToken', response.accessToken);
        localStorage.setItem('clientId', response.id.toString()); // Store the client's ID
      })
    );
  }

  // Get client by ID
  public getClient(id: string): Observable<any> {
    return this.http.get<any>(`${ClientURL}client/${id}`, httpOptions);
  }

  getCurrentClient(): Observable<any> {
    const clientId = localStorage.getItem('clientId');
    if (clientId) {
      return this.getClient(clientId);
    } else {
      // Handle case where clientId is not available
      throw new Error('Client is not logged in');
    }
  }

  logout(): void {
    // Clear any stored tokens or authentication details
    localStorage.removeItem('authToken'); // Assuming you're using localStorage to store the token
    localStorage.removeItem('clientId'); // Remove the client's ID from localStorage
    sessionStorage.removeItem('authToken'); // Remove from sessionStorage if used

    // Perform additional logout operations if necessary, like notifying the server

    // Redirect to the root URL
    this.router.navigate(['']);
  }
  changePassword(username: string, newPassword: string): Observable<string> {
    const payload = { username, newPassword };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(changePasswordUrl, payload, { headers, responseType: 'text' });
  }
}