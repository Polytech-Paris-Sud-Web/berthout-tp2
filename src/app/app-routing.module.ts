import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleCreationComponent} from "./article-creation/article-creation.component";
import {SingleArticleComponent} from "./single-article/single-article.component";
import {HomeComponent} from "./home/home.component";
import {environment} from '../environments/environment';
import {AllArticlesComponent} from "./all-articles/all-articles.component";

const routes: Routes = [
  {path: "create", component: ArticleCreationComponent},
  {path: "articles", component: AllArticlesComponent},
  {path: "articles/:id", component: SingleArticleComponent},
  {path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: !environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
