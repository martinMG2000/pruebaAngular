import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
//import { ErrorDialogService } from '../main/error/error.service';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    private readonly urlBase: string = environment.ServDominio;
    constructor(        
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
      
        if (request.body instanceof FormData) {}
        else {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }        
        request = request.clone({ url: `${this.urlBase}${request.url}`, headers: request.headers.set('Accept', 'application/json') });
        return next.handle(request).pipe(
            tap(() => { },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status !== 401) {
                            return;
                        }
                        sessionStorage.clear();
                        window.location.href = environment.localUrl;                  
                    }
                })
        );
    }
}