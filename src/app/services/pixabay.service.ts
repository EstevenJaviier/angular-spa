import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PixabayService {
  constructor(private http: HttpClient) {}

  getImagenesByQuery({
    q,
    category,
  }: {
    q: string;
    category: string;
  }): Observable<any> {
    const url = new URLSearchParams({
      key: environment.pixabay.key,
      lang: 'es',
      q: q || '',
      category: category || '',
    });
    return this.http
      .get(environment.pixabay.endpoint + `?${url}`)
      .pipe(map((data) => data));
  }
}
