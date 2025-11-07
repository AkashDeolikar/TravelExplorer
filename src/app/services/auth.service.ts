import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private base = `${environment.apiBaseUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(payload: any) {
    return this.http.post(`${this.base}/login`, payload);
  }

  register(payload: any) {
    return this.http.post(`${this.base}/register`, payload);
  }

  getMe() {
    return this.http.get(`${this.base}/me`);
  }
}
