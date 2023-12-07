import { Component } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
  imports:[CommonModule],
  standalone: true
})
export class MyAppointmentsComponent {
  myAppointments: any[] = [];
  myPatient: any;

  constructor(private appointmentService: AppointmentsService, private authService: AuthService) {
    this.myPatient = this.authService.user;
  }

  ngOnInit() {
    this.appointmentService.getMyAppointments(this.myPatient?.id).subscribe(appointments => {
        this.myAppointments = appointments;
    });
  }
}
