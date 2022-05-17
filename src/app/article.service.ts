import {Injectable} from '@angular/core';
import {Article} from "./article/article.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleCreationInfo} from "./article-creation/article-creation.component";

const BASE_URL = "http://localhost:3000/articles";

export interface AddArticleService {
  add(info: ArticleCreationInfo): Observable<any>;
}

export interface GetArticleService {
  get(id: number): Observable<Article>;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements AddArticleService, GetArticleService {
  constructor(private http: HttpClient) {
  }

  articles(): Observable<Article[]> {
    return this.http.get<Article[]>(`${BASE_URL}`);
  }

  remove(id: number): Observable<void> {
    return this.http.delete<any>(`${BASE_URL}/${id}`);
  }

  add(info: ArticleCreationInfo): Observable<any> {
    return this.http.post(`${BASE_URL}`, info);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${BASE_URL}/${id}`);
  }
}
