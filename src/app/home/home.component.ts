import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../article.service";
import {FetchArticlesService} from "../articles/articles.component";
import {Observable} from "rxjs";
import {Article} from "../article/article.component";

export const TOP_COUNT = 10;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly fetchService: FetchArticlesService;
  readonly count: number = TOP_COUNT;

  constructor(articleService: ArticleService) {
    const count = this.count;

    this.fetchService = new class implements FetchArticlesService {
      fetch(): Observable<Article[]> {
        return articleService.articles(count);
      }
    }
  }

  ngOnInit(): void {
  }

}
