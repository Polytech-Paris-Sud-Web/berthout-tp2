import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Article} from "../article/article.component";
import {ArticleService, DeleteArticleService} from "../article.service";
import {mergeMap, Observable} from "rxjs";

export interface FetchArticlesService {
  fetch(): Observable<Article[]>;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnChanges {

  @Input()
  fetchService: FetchArticlesService;

  readonly deleteArticleService: DeleteArticleService;
  articles: Article[] = [];

  constructor(articleService: ArticleService) {
    this.fetchService = new class implements FetchArticlesService {
      fetch(): Observable<Article[]> {
        return articleService.articles();
      }
    }
    this.deleteArticleService = articleService;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // Subscribe to new service
    const fetchServiceChange = changes["fetchService"];
    if (fetchServiceChange) {
      this.updateArticles(fetchServiceChange.currentValue);
    }
  }

  onDelete(article: Article): void {
    // Remove and update articles
    this.deleteArticleService
      .remove(article.id)
      .pipe(mergeMap(() => this.fetchService.fetch()))
      .subscribe(newArticles => this.articles = newArticles);
  }

  private updateArticles(service: FetchArticlesService) {
    service.fetch()
      .subscribe(newArticles => this.articles = newArticles);
  }
}
