import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doenca } from './doenca.interface';

@Injectable({
  providedIn: 'root'
})
export class DoencaService {

  constructor(private http: HttpClient) { }

  getDoenca(id: number): Observable<Doenca> {
    return this.http.get<Doenca>(`${environment.apiUrl}/doencas/${id}`);
  }

  getDoencas(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(`${environment.apiUrl}/doencas`);
  }

  save(doenca: Doenca): Observable<Doenca> {
    return this.http.post<Doenca>(`${environment.apiUrl}/doencas`, doenca);
  }


  update(doenca: Doenca): Observable<Doenca> {
    return this.http.put<Doenca>(`${environment.apiUrl}/doencas/${doenca.id}`, doenca);
  }

  remove({ id }: Doenca): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/doencas/${id}`);
  }
}
