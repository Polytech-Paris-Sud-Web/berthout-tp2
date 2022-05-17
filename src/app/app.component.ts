import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routes = [
    { url: "/", name: "Home" },
    { url: "/articles", name: "Articles" },
    { url: "/create", name: "Create an article" },
  ]
}
