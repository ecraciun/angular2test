import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TodoService}  from './todos/todo-service'

bootstrap(AppComponent, [TodoService]); // [proived('whatever', { useClass: TodoService })]);