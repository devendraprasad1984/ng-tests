import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {UserAuthModule} from "./user-auth/user-auth.module";
import {CalculateComponent} from './calculate/calculate.component';
import {HttpClientModule} from '@angular/common/http';
import {PostListComponent} from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutComponent } from './about/about.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import {AdminModule} from "./admin/admin.module";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        UserListComponent,
        TodoListComponent,
        CalculateComponent,
        PostListComponent,
        HomeComponent,
        NoPageComponent,
        AboutComponent,
        AboutCompanyComponent,
        AboutMeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        UserAuthModule,
        HttpClientModule,
        AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
