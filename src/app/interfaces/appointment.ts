export interface Appointment {
    id: number;
    available: boolean;
    date: string;
    doctorId: number;
    patientId: number;
    time: string;
}