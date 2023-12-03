import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { Appointment } from '../interfaces/appointment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss'],
  imports:[CommonModule],
  standalone: true
})
export default class AppointmentListComponent implements OnInit {
  public appointments:any;

  constructor(private appointmentsService: AppointmentsService) {}

  ngOnInit(): void {
    this.appointmentsService.getAvailableAppointments().subscribe((appointments: Appointment[]) =>{
      this.appointments = appointments;
      console.log('appointments',appointments);
    })
  }
}
