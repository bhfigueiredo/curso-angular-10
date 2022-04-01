import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MeetingService {

  MOBILE_BAAS_URL : string = 'https://mobilebaas.com/backend/api/manage/db';
  tableName: string = 'meeting';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'MOBILEBAASKEY' : 'MTY0ODc0MzI3MjU1OEJyZW5vIEhlbnJpcXVlIGRlIEZpZ3VlaXJlZG8='
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  getById(id: string): Observable<any>{
    return of(this.http.get(this.MOBILE_BAAS_URL + '/' + id + '?table='+this.tableName, this.httpOptions));
  }

  getAll(pageNumber: number, totalRecordsPerPage: number, sortField: string, filters: string): Observable<any>{
    
    let parameters = '?table='+this.tableName;
    
    if(pageNumber != null){
      parameters += '&pagerNumber='+pageNumber;
    }

    if(totalRecordsPerPage != null){
      parameters += '&totalRecordsPerPage='+totalRecordsPerPage;
    }

    if(sortField != null){
      parameters += '&sortField='+sortField;
    }

    if(filters != null){
      parameters += '&filters='+filters;
    }

    return of(this.http.get(this.MOBILE_BAAS_URL + '/find' + parameters, this.httpOptions));
  }

  insert(meeting: any): Observable<any> {
    return this.http.post(this.MOBILE_BAAS_URL + '?table='+this.tableName, meeting, this.httpOptions);
  }

  update(meeting: any): Observable<any> {
    return this.http.put(this.MOBILE_BAAS_URL + '?table='+this.tableName, meeting, this.httpOptions);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.MOBILE_BAAS_URL + '/' + id + '?table='+this.tableName, this.httpOptions);
  }
}
