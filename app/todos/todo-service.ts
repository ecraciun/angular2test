import {Injectable} from 'angular2/core';
import {TodoModel} from './TodoModel';

@Injectable()
export class TodoService{
    todos = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code")
    ];
}