import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module";
import {CalculateComponent} from './calculate/calculate.component';
import {HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './post-list/post-list.component'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UserListComponent,
        TodoListComponent,
        CalculateComponent,
        PostListComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        UserAuthModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
