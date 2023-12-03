import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Appointment } from '../interfaces/appointment';




@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  
  constructor(private http: HttpClient) { }


  getAvailableAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>('http://localhost:3000/appointments').pipe(
      map((appointments: Appointment[]) => appointments.filter(appointment => appointment.available === true))
    );
  }
}


