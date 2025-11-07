// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class BookingService {
//   private apiUrl = 'http://localhost:3000/api/bookings';

//   constructor(private http: HttpClient) {}

//   // ✅ Create booking
//   createBooking(data: any): Observable<any> {
//     return this.http.post(this.apiUrl, data);
//   }

//   // ✅ Get bookings by user ID
//   getBookingsByUser(userId: string): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
//   }

//   // ✅ Delete booking
//   deleteBooking(id: string): Observable<any> {
//     return this.http.delete(`${this.apiUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'http://localhost:3000/api/bookings';

  constructor(private http: HttpClient) { }

  //  Automatically add JWT token to request headers
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
  }

  //  Create a new booking
  createBooking(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data, { headers: this.getHeaders() });
  }

  //  Get bookings of the logged-in user
  getBookingsByUser(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl, { headers: this.getHeaders() });
  }

  //  Delete a booking
  deleteBooking(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }
}
