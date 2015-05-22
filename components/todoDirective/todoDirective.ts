/// <reference path="../../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap, For} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'todos'
})

@View({
  templateUrl: 'components/todoDirective/todoDirective.html',
  directives: [For]
})

// Component controller
export class TodoDirective {
  todos: String[] = [
    "Give away a book",
    "Cool sauce!"
  ]
  constructor() {

  }
}