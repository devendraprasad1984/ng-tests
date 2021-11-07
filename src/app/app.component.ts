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
    getValue() {
        return 'get function data'
    }
}
