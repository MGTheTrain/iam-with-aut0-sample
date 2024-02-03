import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuardedApiComponent } from './components/auth-guarded-api/auth-guarded-api.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth-guarded-api', component: AuthGuardedApiComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }