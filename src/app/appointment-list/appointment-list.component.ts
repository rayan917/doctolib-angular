import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { Appointment } from '../interfaces/appointment';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  imports:[CommonModule],
  standalone: true
})
export default class AppointmentListComponent implements OnInit {
  public appointments?:Appointment[];

  constructor(private appointmentsService: AppointmentsService, private authService: AuthService) {}

  ngOnInit(): void {
    this.appointmentsService.getAvailableAppointmentsWithDoctorInfo().subscribe((appointments: Appointment[]) =>{
      this.appointments = appointments;
      console.log('appointments',appointments);
    });


  }


}
