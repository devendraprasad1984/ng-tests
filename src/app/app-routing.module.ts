import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./user-auth/sign-in/sign-in.component";
import {SignUpComponent} from "./user-auth/sign-up/sign-up.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CalculateComponent} from "./calculate/calculate.component";
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'signin', component: SignInComponent},
  {path:'signup', component: SignUpComponent},
  {path:'todo', component: TodoListComponent},
  {path:'calculate', component: CalculateComponent},
  {path:'posts', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
