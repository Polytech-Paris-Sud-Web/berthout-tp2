import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../article.service";
import {FetchArticlesService} from "../articles/articles.component";
import {Observable} from "rxjs";
import {Article} from "../article/article.component";

@Component({
  selector: 'app-all-articles',
  templateUrl: './all-articles.component.html',
  styleUrls: ['./all-articles.component.scss']
})
export class AllArticlesComponent implements OnInit {

  search: string | undefined;
  fetchService: FetchArticlesService;

  constructor(private articleService: ArticleService) {
    this.search = undefined;

    const search = this.search;
    this.fetchService = new class implements FetchArticlesService {
      fetch(): Observable<Article[]> {
        return articleService.articles(undefined, search);
      }
    }
  }

  ngOnInit(): void {
  }

  onSearchChange(value: string) {
    const articleService = this.articleService;

    // Update service
    this.fetchService = new class implements FetchArticlesService {
      fetch(): Observable<Article[]> {
        return articleService.articles(undefined, value.length !== 0 ? value : undefined);
      }
    }
  }
}
