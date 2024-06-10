import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const CLIENT_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveClient(client: any): void {
    window.sessionStorage.removeItem(CLIENT_KEY);
    window.sessionStorage.setItem(CLIENT_KEY, JSON.stringify(client));
  }
  public getClient(): any {
    const user = window.sessionStorage.getItem(CLIENT_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
