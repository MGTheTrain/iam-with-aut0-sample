import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isAuthenticated: boolean = false;
  accessToken: string | null = null; // Variable to store the ID token

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;

      if (isAuthenticated) {
        this.auth.getAccessTokenSilently().subscribe(
          (accessToken: string) => {
            this.accessToken = accessToken;
            console.log(this.accessToken)
          },
          (error) => {
            console.error('Error getting access token:', error);
          }
        );
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }
  title: String = 'sample-app';
}
