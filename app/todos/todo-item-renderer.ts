import {Component, Input} from 'angular2/core';
import {TodoService}  from './todo-service'
import {ViewEncapsulation} from 'angular2/core';

@Component({
    selector: 'todo-item-renderer',
    //encapsulation: ViewEncapsulation.None, // all in, all out
    //encapsulation: ViewEncapsulation.Native, // no styles in, no styles out
    encapsulation: ViewEncapsulation.Emulated, // all in, none out
    template: `
    <style>
        .completed{
            text-decoration: line-through;
        }
    </style>
    <div>
        <span [ngClass]="todo.status">{{todo.title}}</span> <!--[contentEditable]-->
        <button (click)="todo.toggle()">Toggle</button>
    </div>`
})
export class TodoItemRenderer { 
    @Input() todo;
}