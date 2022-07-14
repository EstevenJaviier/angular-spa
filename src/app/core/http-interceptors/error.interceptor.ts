import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error event occurred:', err.error.message);
        }
        if (err.error instanceof ProgressEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error progress event occurred:', err.error);
        }

        if ([401, 403].includes(err.status)) {
          // auto logout if 401 or 403 response returned from api
          console.log('Not Authorizated');
        }

        const error = {
          status: err.status,
          message: err?.error?.message || err.statusText,
        };

        return throwError(error);
      })
    );
  }
}
