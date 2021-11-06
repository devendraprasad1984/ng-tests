import {Component, Input, OnInit} from '@angular/core';

const todoListForm = `
    <h2>todo list form</h2>
    <div>
        <input #task type='text' placeholder='enter task' />
        <button (click)="addTask(task.value)">add task</button>
    </div>
    
`
const showTodo = `
    <div *ngFor="let task of todoTaskList">
       <span>{{task.value}} <button (click)="removeTodo(task.id)">Remove</button></span>
    </div>
`

@Component({
    selector: 'app-todo-list',
    template: `
    <div class='border'>
    <h1>numberValue from parent app component: {{ numberValue }}</h1>
    <h3 class='xred bgpurple'>
      todo-list works - inline styling and templating!
    </h3>
    ${todoListForm}
    ${showTodo}
    </div>
  `,
    styles: [
        `.xred { color: tomato; }`,
        `.bgpurple {background-color: purple;}`,
        `.border {border: 1px solid gray}`
    ]
})
export class TodoListComponent implements OnInit {
    todoTaskList: any[] = []
    @Input() numberValue: number = 0

    constructor() {
    }

    ngOnInit(): void {
    }

    addTask(task: string) {
        this.todoTaskList.push({id: this.todoTaskList.length, value: task})
        console.log(this.todoTaskList)
    }

    removeTodo(id: number) {
        this.todoTaskList = this.todoTaskList.filter(item => item.id !== id)
    }
}
