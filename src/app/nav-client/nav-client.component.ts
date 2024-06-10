import { Component } from '@angular/core';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-nav-client',
  templateUrl: './nav-client.component.html',
  styleUrls: ['./nav-client.component.css']
})
export class NavClientComponent {

  constructor(
    private loginService: LoginService,
  ) { }

  onLogout(): void {
    this.loginService.logout();
  }

}
