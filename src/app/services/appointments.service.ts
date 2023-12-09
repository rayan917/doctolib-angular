import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { Appointment } from '../interfaces/appointment';
import { Doctor } from '../interfaces/doctor';




@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  
  constructor(private http: HttpClient) { }
  private appointmentsUrl = 'http://localhost:3000/appointments';

  getAvailableAppointmentsWithDoctorInfo(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.appointmentsUrl}`).pipe(
      switchMap((appointments: Appointment[]) => {
        const observables = appointments.map(appointment =>
          this.getDoctorInfo(appointment.doctorId).pipe(
            map(doctor => ({
              ...appointment,
              doctor,
            }))
          )
        );
        return forkJoin(observables);
      }),
      map((appointmentsWithDoctor: Appointment[]) =>
        appointmentsWithDoctor.filter(appointment => appointment.available === true)
      )
    );
  }

   getDoctorInfo(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`http://localhost:3000/doctors/${doctorId}`);
  }

  getMyAppointments(patientId: number): Observable<any[]> {
    const patientAppointmentsUrl = `${this.appointmentsUrl}?patientId=${patientId}`;

    return this.http.get<Appointment[]>(patientAppointmentsUrl).pipe(
      switchMap((appointments: Appointment[]) => {
        const observables = appointments.map(appointment =>
          this.getDoctorInfo(appointment.doctorId).pipe(
            map(doctor => ({
              ...appointment,
              doctor,
            }))
          )
        );
        return forkJoin(observables);
      })
    );
  }

  userTakeAppointments(appointment:Appointment,patientId:number){
    const updatedAppointment: Appointment = {
      ...appointment,
      available: false,
      patientId:patientId
    };
    
    return this.http.put(`${this.appointmentsUrl}/${updatedAppointment.id}`, updatedAppointment);
  }

  userRemoveAppointments(appointment:Appointment){
    const updatedAppointment: Appointment = {
      ...appointment,
      available: true,
      patientId:null
    };

    return this.http.put(`${this.appointmentsUrl}/${updatedAppointment.id}`, updatedAppointment);
  }

  
}


