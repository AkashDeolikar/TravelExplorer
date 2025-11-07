import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  private apiUrl = 'http://localhost:3000/api/places';

  constructor(private http: HttpClient) {}

  // Get all places (optionally filtered)
  getPlaces(filters?: any): Observable<Place[]> {
    let params = new HttpParams();

    if (filters) {
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params = params.set(key, filters[key]);
      });
    }

    return this.http.get<Place[]>(this.apiUrl, { params });
  }

  // Get one place by ID
  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${this.apiUrl}/${id}`);
  }

  // Get filter options (for Explore dropdowns)
  getFilters(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filters`);
  }
}
