import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Medico } from './medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  constructor(private http: HttpClient) { }

  getMedico(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${environment.apiUrl}/medicos/${id}`);
  }

  getMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${environment.apiUrl}/medicos`);
  }

  save(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(`${environment.apiUrl}/medicos`, medico);
  }


  update(medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${environment.apiUrl}/medicos/${medico.id}`, medico);
  }

  remove({ id }: Medico): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/medicos/${id}`);
  }
}
