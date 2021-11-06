import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users.service";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    constructor(private users: UsersService) {
    }

    ngOnInit(): void {
    }

    getUserFormData(data: any) {
        console.log(data)
        this.users.saveUser(data).subscribe((data: any)=>{
            console.log('user saved')
        })
    }

}
