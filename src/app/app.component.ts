import {Component} from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title: string = 'first';
    msg: string = 'code step by step';
    numberValue: number = 15;
    userList: any[] = [
        {name: 'user 1', phone: '92839283', socialIds: ['one', 'two', 'three']},
        {name: 'user 2', phone: '92839283', socialIds: ['one', 'three']},
        {name: 'user 3', phone: '92839283', socialIds: ['two', 'three']},
        {name: 'user 4', phone: '92839283'},
        {name: 'user 5', phone: '92839283'}
    ]
    getValue() {
        return 'get function data'
    }

}
