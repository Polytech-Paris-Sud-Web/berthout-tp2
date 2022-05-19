import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {ArticlesComponent} from './articles/articles.component';
import {AddArticleService, ArticleService} from "./article.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ArticleCreationComponent} from './article-creation/article-creation.component';
import {SingleArticleComponent} from './single-article/single-article.component';
import {HomeComponent} from './home/home.component';
import {AllArticlesComponent} from './all-articles/all-articles.component';
import {AuthorComponent} from './author/author.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    ArticleCreationComponent,
    SingleArticleComponent,
    HomeComponent,
    AllArticlesComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
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
