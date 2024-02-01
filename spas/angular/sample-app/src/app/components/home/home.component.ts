import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // constructor(private auth: AuthService) {}

  login() {
    // this.auth.loginWithRedirect();
  }
  title: String = 'sample-app';
}
