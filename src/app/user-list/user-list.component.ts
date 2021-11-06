import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    socialIdsColor = "green"
    @Input() user: { name: string, phone: string, socialIds: any[] } = {name: '', phone: '', socialIds: []}

    constructor() {
    }

    ngOnInit(): void {
    }

    changeColor() {
        this.socialIdsColor = 'blue'
    }

}
