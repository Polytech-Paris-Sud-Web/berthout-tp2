import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleCreationComponent} from "./article-creation/article-creation.component";
import {ArticlesComponent} from "./articles/articles.component";
import {SingleArticleComponent} from "./single-article/single-article.component";

const routes: Routes = [
  {path: "create", component: ArticleCreationComponent},
  {path: "articles", component: ArticlesComponent},
  {path: "articles/:id", component: SingleArticleComponent},
  {path: "", component: ArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
