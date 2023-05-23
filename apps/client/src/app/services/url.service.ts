import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlMapping } from '@url-shortener/server-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UrlService {
  constructor(private http: HttpClient) {}

  shortenUrl(fullUrl: string): Observable<Pick<UrlMapping, 'shortUrl'>> {
    return this.http.post<Pick<UrlMapping, 'shortUrl'>>('/api/url', {
      fullUrl,
    });
  }
}
