import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article} from "../article/article.component";
import {GetArticleService} from "../article.service";
import {mergeMap} from "rxjs";

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent implements OnInit {

  article: Article | null;
  error: any | null;

  constructor(private route: ActivatedRoute, @Inject("GetArticleService") private getArticleService: GetArticleService) {
    this.article = null;
    this.error = null;
  }

  ngOnInit(): void {
    // Get article with the id specified in the route
    this.route.params
      .pipe(mergeMap(params => this.getArticleService.get(params["id"])))
      .subscribe({
        next: newArticle => this.article = newArticle,
        error: e => this.error = e
      });
  }
}
