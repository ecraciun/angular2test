import {Component, Inject} from 'angular2/core';
import {TodoService}  from '../services/todo-service';
import {TodoModel} from '../services/TodoModel';

@Component({
    selector: 'todo-list-item',
    templateUrl: '/app/todos/todo/components/todo-list-item.html'
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
        this.todoService.addTodo(this.todoModel);
        console.log(this.todoService);
        this.todoModel = new TodoModel();
    }
}