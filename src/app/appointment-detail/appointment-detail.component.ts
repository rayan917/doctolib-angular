import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appointment } from '../interfaces/appointment';
import { Patient } from '../interfaces/patient';
import { Doctor } from '../interfaces/doctor';
import { Router } from '@angular/router';


@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.component.html',
  styleUrls: ['./appointment-detail.component.scss'],
  standalone: true
})
export default class AppointmentDetailComponent {
  constructor(private router: Router) { }
  @Input() appointment?: Appointment;
  @Input() patient?: Patient;
  @Output() onCancelAppointment: EventEmitter<Appointment> = new EventEmitter<Appointment>();


  cancelAppointment() {
    this.onCancelAppointment.emit(this.appointment);
  }

  navigateDoctor(doctor?:Doctor){
    if (doctor?.id) {
      this.router.navigate(['/home/doctors', doctor.id]);
    }
  }
}
