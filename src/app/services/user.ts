// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   private apiUrl = 'http://localhost:3000/api/auth';

//   constructor(private http: HttpClient) {}

//   register(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, data);
//   }

//   login(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, data);
//   }

//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }

//   isLoggedIn(): boolean {
//     return !!this.getToken();
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/auth'; // updated port & path

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.apiUrl}/me`, { headers });
  }
}
