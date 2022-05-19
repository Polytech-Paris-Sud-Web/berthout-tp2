import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Author} from "./author/author.component";
import {environment} from '../environments/environment';

const BASE_URL = `${environment.api.url}/authors`;

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  get(id: string): Observable<Author> {
    return this.http.get<Author>(`${BASE_URL}/${id}`);
  }
}
