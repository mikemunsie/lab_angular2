/// <reference path="typings/angular2/angular2.d.ts">
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  template: '<h1>{{Message}}</h1>'
})
// Component controller
class MyAppComponent {
  Message: string;
  constructor() {
    this.Message = 'My angular app lol';
  }
}

bootstrap(MyAppComponent);