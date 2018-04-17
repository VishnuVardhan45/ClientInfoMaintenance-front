import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  moduleId: module.id.toString(),
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private  router : Router) {
  }
  title = 'app';
}
