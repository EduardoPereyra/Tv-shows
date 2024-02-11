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
    // gets all the tv shows
    return this.httpClient.get(`${this.apiUrl}/shows`);
  }

  getShowDataSearch(title: string): Observable<any> {
    // gets all the tv shows matching the title
    return this.httpClient.get(`${this.apiUrl}/search/shows?q=${title}`);
  }

  getShowDetails(showId: string): Observable<any> {
    // gets the tv show matching the id
    return this.httpClient.get(`${this.apiUrl}/shows/${showId}`);
  }
}
