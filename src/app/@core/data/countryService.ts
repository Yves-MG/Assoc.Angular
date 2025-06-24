import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' }) // ou tu peux aussi l’injecter localement
export class CountryService {
  constructor(private http: HttpClient) {}

  getNationalities(): Observable<string[]> {
    return this.http.get<any[]>(environment.apiUrl_nation).pipe(
      map(countries =>
        countries
          .map(c => c.demonyms?.fra?.m)
          .filter(Boolean)
          .sort()
      )
    );
  }
  getLanguages(): Observable<string[]> {
    return this.http.get<any[]>(environment.apiUrl_nation).pipe(
      map(countries => {
        const languages = new Set<string>();
        countries.forEach(country => {
          if (country.languages) {
            Object.values(country.languages).forEach(lang => {
              languages.add(lang as string);
            });
          }
        });
        return Array.from(languages).sort();
      })
    );
  }
}
