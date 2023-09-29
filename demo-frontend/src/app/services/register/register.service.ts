import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  registerUser(user: any): Observable<any> {
    const url = `${this.baseUrl}users/register`;
    return this.http.post(url, user);
  }
}
