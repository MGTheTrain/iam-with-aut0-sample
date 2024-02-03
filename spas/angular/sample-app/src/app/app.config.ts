import { NgModule } from '@angular/core';
import { RoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AuthModule.forRoot({
      domain: environment.auth0.domain,  
      clientId: environment.auth0.clientId,  
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: environment.auth0.audience,
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }