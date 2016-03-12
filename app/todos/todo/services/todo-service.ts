import {Injectable} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Injectable()
export class TodoService{
    todos = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("eat"),
        new TodoModel("bla"),
        new TodoModel("ana"),
        new TodoModel("are", "completed"),
        new TodoModel("mere", "completed"),
        new TodoModel("multe", "completed"),
        new TodoModel("si stricate", "completed"),
        new TodoModel("code")
    ];
    
    addTodo(todo: TodoModel){
        this.todos = [...this.todos, todo];   
    }
    
    toggleTodo(todo: TodoModel){
        //todo.toggle();
        
        const status = todo.status == "started" ? "completed" : "started";
        
        const toggledTodo = Object.assign({}, todo, { status });
        
        const i = this.todos.indexOf(todo);
        
        this.todos = [
            ...this.todos.slice(0, i),
            toggledTodo,
            ...this.todos.slice(i + 1)
        ];        
    }
}