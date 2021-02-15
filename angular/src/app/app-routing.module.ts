import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './core/authentication/auth-guard.service';
import { FormLoginComponent } from './form-login/form-login.component';
import { RegisterComponent } from './register/register.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';

const routes: Routes = [
  { path: 'FormLogin', component: FormLoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ViewQueue', component: ViewQueueComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '/FormLogin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
