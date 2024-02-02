import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;
  accessToken: string | null = null; // Variable to store the ID token

  constructor(public auth: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.isAuthenticated = (await this.auth.isAuthenticated$.toPromise())!;
    if (this.isAuthenticated) {
      try {
        this.accessToken = (await this.auth.getAccessTokenSilently().toPromise())!;
        console.log(this.accessToken);
      } catch (error) {
        console.error('Error getting access token:', error);
      }
    }
  }

  login() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout();
  }

  title: string = 'sample-app';
}
