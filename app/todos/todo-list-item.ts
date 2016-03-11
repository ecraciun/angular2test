import {Component, Inject} from 'angular2/core';
import {TodoService}  from './todo-service';
import {TodoModel} from './TodoModel';

@Component({
    selector: 'todo-list-item',
    template: `
    <li>
        <div>{{message}}</div>
        
        <!--<input type="text" #myInput />
        <button (click)="onClick($event, myInput.value)">Click me</button>-->
        <form (submit)="onSubmit()">        
            <input type="text" [(ngModel)]="todoModel.title" />
        </form>
    </li>`
})
export class TodoListItem { 
    constructor(public todoService: TodoService){
        console.log(todoService);
    }
    
    todoModel: TodoModel = new TodoModel();
    message = "Todo list item";
    
    // constructor(@Inject(TodoService) public todoService){
    //     console.log(todoService);
    // }
    
    // constructor(@Inject('whatever') public todoService){
    //     console.log(todoService);
    // }
    
    // onClick(event, value){
    //     console.log(`List item button was clicked with ${value}`);
    //     this.todoService.todos.push(value);
    //     console.log(this.todoService);
    // }
    
    onSubmit(){
        console.log(`List item button was clicked with ${this.todoModel}`);
        this.todoService.todos.push(this.todoModel);
        console.log(this.todoService);
        this.todoModel = new TodoModel();
    }
}