import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../Service/login.service';
import { TokenStorageService } from '../../Service/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  client = {
    numTel: "",
    password: "",

  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  passwordFieldType: string = 'password';

  constructor(
    private router: Router,
    private loginService: LoginService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      // this.router.navigate(['/post']);
      this.roles = this.tokenStorage.getClient().roles;


    }
  }

  submitClientLogInForm(form: any) {
    const { numTel, password } = this.client;
    this.loginService.login(numTel, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.jwt);
        this.tokenStorage.saveClient(data);
        window.sessionStorage.setItem("username", numTel);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getClient().roles;
        this.router.navigate(['/post']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        console.log(err.error.message);
        this.isLoginFailed = true;
      }
    });

  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
