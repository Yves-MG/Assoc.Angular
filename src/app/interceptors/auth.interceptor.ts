import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NbAuthService, NbAuthToken } from '@nebular/auth';
import { Router } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: NbAuthService,
    private router: Router,
    //private apiService: ApiService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let { url, method, headers, body } = request;
    
    if (url.endsWith(environment.logout_uri) && method === 'GET') {
      return next.handle(request);
    }
    if (url.endsWith(environment.generate_token_uri) && method === 'POST') {
      return next.handle(request);
    }
    
    return next.handle(request);
  }

  handleRequest(req: HttpRequest<any>, next: HttpHandler, token: NbAuthToken) {
    const JWT = `Bearer ${token.getValue()}`;
    req = req.clone({
      setHeaders: {
        Authorization: JWT,
      },
    });
    return next.handle(req).pipe(
      tap(evt => {
        return evt;
      }),
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 403) {
            this.router.navigate(['/']);
          } else if (error.status == 401) {
            this.router.navigate([environment.login_uri]);
          }
        }
        return throwError(() => error);
      })
    );
  }
}
