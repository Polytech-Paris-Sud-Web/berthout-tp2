import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AddArticleService} from "../article.service";
import {Router} from "@angular/router";

export interface ArticleCreationInfo {
  readonly title: string;
  readonly content: string;
  readonly author: string;
}

@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.scss']
})
export class ArticleCreationComponent implements OnInit {

  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, @Inject("AddArticleService") private addArticleService: AddArticleService) {
    this.articleForm = this.fb.group({
      title: ["Fake Title", Validators.required],
      content: ["", Validators.required],
      author: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  }

  create(): void {
    const form = this.articleForm.value;
    const title: string = form.title;
    const content: string = form.content;
    const author: string = form.author;

    // Add article and go to /articles
    this.addArticleService
      .add({title, content, author})
      .subscribe(() => this.router.navigate(["/articles"]))
  }
}
