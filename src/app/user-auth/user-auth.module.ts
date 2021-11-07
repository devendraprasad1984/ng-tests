import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomColorDirective} from "../directives/custom-color.directive";

@NgModule({
    declarations: [
        SignInComponent,
        SignUpComponent,
        CustomColorDirective
    ],
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule
    ],
    exports: [
        SignInComponent,
        SignUpComponent
    ]
})
export class UserAuthModule {
}
