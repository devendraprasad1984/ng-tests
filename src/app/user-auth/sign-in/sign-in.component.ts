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
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
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
