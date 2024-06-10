import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Service/login.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  clientData: any;
  changePasswordVisible: boolean = false;
  newPassword: string = '';

  changePasswordSuccessMessage: string = '';
  changePasswordErrorMessage: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getCurrentClient().subscribe({
      next: (data: any) => {
        this.clientData = data; // Store the client data
        console.log('Current client data:', this.clientData);
      },
      error: (err: any) => {
        console.error('Error fetching current client data:', err);
      }
    });
  }

  toggleChangePassword(): void {
    this.changePasswordVisible = !this.changePasswordVisible;
    this.changePasswordSuccessMessage = '';
    this.changePasswordErrorMessage = '';
  }

  changePassword(): void {
    this.loginService.changePassword(this.clientData.numTel, this.newPassword).subscribe({
      next: (response) => {
        console.log('Password change successful', response);
        this.changePasswordSuccessMessage = response;  // Assuming the response is a success message string
        this.newPassword = '';
        this.changePasswordVisible = false;
      },
      error: (error) => {
        console.error('Password change failed', error);
        this.changePasswordErrorMessage = 'Failed to change password';
      }
    });
  }
}
