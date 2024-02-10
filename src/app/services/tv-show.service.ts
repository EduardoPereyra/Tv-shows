import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvShowRestService {
  apiUrl = ' https://api.tvmaze.com';

  constructor(private httpClient: HttpClient) {}

  getShowData(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/shows`);
  }

  getShowDetails(showId: string): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/shows/${showId}`);
  }
}
