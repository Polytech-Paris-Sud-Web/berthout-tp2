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
import { SingleArticleComponent } from './single-article/single-article.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    SingleArticleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ArticleService,
    {provide: "AddArticleService", useClass: ArticleService},
    {provide: "GetArticleService", useClass: ArticleService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
