import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {ArticlesComponent} from './articles/articles.component';
import {AddArticleService, ArticleService} from "./article.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {ArticleCreationComponent} from './article-creation/article-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticleService,
    {provide: "AddArticleService", useClass: ArticleService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
