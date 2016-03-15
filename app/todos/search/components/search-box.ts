import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'search-box',
    template: `
    <div>
        <label>Search</label>
        <input #input type="text" (input)="update.emit(input.value)" />
    </div>`
})
export class SearchBox {
    @Output() update = new EventEmitter();
    
    ngOnInit(){
        this.update.emit('');
    }
}