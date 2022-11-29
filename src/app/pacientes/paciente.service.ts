import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Paciente } from './paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${environment.apiUrl}/pacientes/${id}`);
  }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${environment.apiUrl}/pacientes`);
  }

  save(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${environment.apiUrl}/pacientes`, paciente);
  }


  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${environment.apiUrl}/pacientes/${paciente.id}`, paciente);
  }

  remove({ id }: Paciente): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/pacientes/${id}`);
  }
}
