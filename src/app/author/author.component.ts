import {Component, Input, OnInit} from '@angular/core';
import {AuthorService} from "../author.service";

export interface Author {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input()
  authorId: string;

  author: Author | null;
  error: any | null;

  constructor(private authorService: AuthorService) {
    this.authorId = "";
    this.author = null;
    this.error = null;
  }

  ngOnInit(): void {
    this.authorService
      .get(this.authorId)
      .subscribe({
        next: newAuthor => this.author = newAuthor,
        error: e => this.error = e
      });
  }
}
