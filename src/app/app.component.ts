import {Component, OnInit} from '@angular/core';
import {ArticleService} from "./article.service";
import {TOP_COUNT} from "./home/home.component";
import {AuthorService} from "./author.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  routes = [
    {url: "/", name: "Home"},
    {url: "/articles", name: "Articles"},
    {url: "/create", name: "Create an article"},
  ]

  constructor(private articleService: ArticleService, private authorService: AuthorService) {
  }

  ngOnInit() {
    // Call all API endpoints that are required in offline mode, so that they are cached
    this.articleService.articles(TOP_COUNT).subscribe();
    this.articleService.articles()
      .subscribe(articles => {
        // Fetch single article
        const authors = new Set<string>();
        for (const article of articles) {
          this.articleService.get(article.id).subscribe();

          authors.add(article.author);
        }

        // Fetch authors
        for (const author of authors) {
          this.authorService.get(author).subscribe();
        }
      });
  }
}
