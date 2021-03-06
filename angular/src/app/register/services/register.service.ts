import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from 'src/app/shared/backendModels/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = environment.baseUrlRestServices;

  constructor(private http: HttpClient) { }

  registerVisitor(visitor: Visitor): Observable<Visitor> {
    return this.http.post<Visitor>(`${this.baseUrl}` + '/visitormanagement/v1/visitor', visitor);
  }
}
