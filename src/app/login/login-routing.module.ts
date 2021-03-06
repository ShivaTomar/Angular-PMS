import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoggedInAuthGuard } from '../_guards/LoggedInAuthGuard.guard';

const routes: Routes = [{ path: '', component: LoginComponent, canActivate: [LoggedInAuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
