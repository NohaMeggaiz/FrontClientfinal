import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../Service/token-storage.service';
@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent {
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {}

  logout() {
    // Clear session and navigate to login page
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']);
  }

}
