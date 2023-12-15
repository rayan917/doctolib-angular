import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../services/appointments.service';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from '../interfaces/doctor';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html',
  styleUrls: ['./doctor-detail.component.scss'],
  standalone:true
})
export class DoctorDetailComponent implements OnInit {
  doctor?: Doctor;

  constructor(private appointmentService: AppointmentsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.appointmentService.getDoctorInfo(params['id']).subscribe(
        doctor => {
          this.doctor = doctor;
        },
        error => {
          console.error('Error fetching doctor details:', error);
        }
      );
    });
  }
}
