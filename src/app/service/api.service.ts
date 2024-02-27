import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {
  constructor(private http: HttpClient) {}

  private requestLog = new Subject<Observable<any>>();

  private formatErrors(error: any): Observable<any> {
    error = error.errorMessages || error;
    console.log(error);
    return throwError(() => new Error(error || error.message));
  }
  
  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    console.log("ALPER");
    console.log(path);
    console.log(`${environment.api_url}${path}`);

    const request = this.http.get(`${environment.api_url}${path}`, { params })
      .pipe(
        shareReplay(1),
        catchError(this.formatErrors)
      );
    this.requestLog.next(request);
    return request;
  }
}
