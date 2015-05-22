/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoDirective} from 'components/todoDirective/todoDirective';

// Annotation section
@Component({
  selector: 'my-todo-app'
})

@View({
  template: `
    <todos></todos>
   `,
   directives: [TodoDirective]
})

// Component controller
class AppComponent {
  constructor() {

  }
}

bootstrap(AppComponent);