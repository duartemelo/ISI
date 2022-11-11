import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  readonly APIUrl = "http://127.0.0.1:5000";

  constructor(private http: HttpClient) { }

  get_titles(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + "/titles");
  }
}
