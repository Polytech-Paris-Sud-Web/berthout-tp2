import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleCreationInfo} from "../article-creation/article-creation.component";

export interface Article extends ArticleCreationInfo {
  readonly id: number;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input()
  id: number;
  @Input()
  title: string;
  @Input()
  author: string;
  @Input("customContent")
  content: string;
  @Input()
  allowLink: boolean;

  @Output()
  readonly deletedArticle = new EventEmitter<Article>();

  constructor() {
    this.id = -1;
    this.title = "undefined";
    this.author = "undefined";
    this.content = "undefined";
    this.allowLink = false;
  }

  ngOnInit(): void {
  }

  delete() {
    // Notify article removal
    this.deletedArticle.emit({
      id: this.id,
      title: this.title,
      author: this.author,
      content: this.content
    });
  }
}
