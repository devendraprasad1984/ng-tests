import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    //reactive form example
    signInControl = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.email, Validators.pattern('[a-zA-Z0-9]+$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]+$')])
    })

    constructor() {
    }

    ngOnInit(): void {
    }

    handleUserLogin() {
        console.log(this.signInControl.value)
    }

    get validateUser() {
        return this.signInControl.get('username')
    }

    get validatePassword() {
        return this.signInControl.get('password')
    }
}
