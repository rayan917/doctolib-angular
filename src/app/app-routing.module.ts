// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { MyAppointmentsComponent } from './my-appointments/my-appointments.component';
import { AppointmentDetailComponent } from './appointment-detail/appointment-detail.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth-guards';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'appointments-list',
    component: AppointmentListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointment-detail/:id',
    component: AppointmentDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-appointments',
    component: MyAppointmentsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
