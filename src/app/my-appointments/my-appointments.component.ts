import { Component } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import AppointmentDetailComponent from '../appointment-detail/appointment-detail.component'
import { Appointment } from '../interfaces/appointment';

@Component({
  selector: 'app-my-appointments',
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.scss'],
  imports:[CommonModule,AppointmentDetailComponent,CommonModule],
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

  handleCancelAppointment(appointment: Appointment){
    this.appointmentService.userRemoveAppointments(appointment).subscribe(
      updatedAppointment => {
        console.log('Rendez-vous mis à jour avec succès :', updatedAppointment);
        if(this.myAppointments.length===1){
          this.myAppointments=[]
        }
        else{
          this.appointmentService.getMyAppointments(this.myPatient?.id).subscribe(appointments => {
            this.myAppointments = appointments;
        });
        }
     
      }
      )
  }
}
