import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Dragon } from './model/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonService {
  private url: string = environment.apiURL;
  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<Dragon[]>{
    return this.http.get<Dragon[]>(`${this.url}/api/v1/dragon`);
  }
  getById(id: string): Observable<Dragon>{
    return this.http.get<Dragon>(`${this.url}/api/v1/dragon/${id}`);
  }
  create(dragon: Dragon): Observable<Dragon>{
    return this.http.post<Dragon>(`${this.url}/api/v1/dragon`, dragon);
  }
  delete(id: string): Observable<Dragon>{
    return this.http.delete<Dragon>(`${this.url}/api/v1/dragon/${id}`);
  }
  uptade(dragon: Dragon): Observable<Dragon>{
    return this.http.put<Dragon>(`${this.url}/api/v1/dragon/${dragon.id}`, dragon);
  }
}
