import {Injectable} from '@angular/core';
import {Article} from "./article/article.component";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleCreationInfo} from "./article-creation/article-creation.component";
import {environment} from '../environments/environment';

const BASE_URL = `${environment.api.url}/articles`;

export interface AddArticleService {
  add(info: ArticleCreationInfo): Observable<any>;
}

export interface GetArticleService {
  get(id: number): Observable<Article>;
}

export interface DeleteArticleService {
  remove(id: number): Observable<void>;
}

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements AddArticleService, GetArticleService, DeleteArticleService {
  constructor(private http: HttpClient) {
  }

  articles(last: number | undefined = undefined, query: string | undefined = undefined): Observable<Article[]> {
    const params: { _sort?: string, _order?: string, _limit?: number, q?: string } = {};
    if (last !== undefined) {
      params._sort = "id";
      params._order = "desc";
      params._limit = last;
    }
    if (query !== undefined) {
      params.q = query;
    }

    return this.http.get<Article[]>(`${BASE_URL}`, {params});
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
