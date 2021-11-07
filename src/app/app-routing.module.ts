import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from "./user-auth/sign-in/sign-in.component";
import {SignUpComponent} from "./user-auth/sign-up/sign-up.component";
import {TodoListComponent} from "./todo-list/todo-list.component";
import {CalculateComponent} from "./calculate/calculate.component";
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";
import {NoPageComponent} from "./no-page/no-page.component";
import {AboutComponent} from "./about/about.component";
import {AboutCompanyComponent} from "./about-company/about-company.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {AdminRoutingModule} from "./admin/admin-routing.module";

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'signin', component: SignInComponent},
  {path:'signup', component: SignUpComponent},
  {path:'todo', component: TodoListComponent},
  {path:'calculate', component: CalculateComponent},
  {path:'posts', component: PostListComponent},
  {path:'about', component: AboutComponent, children:[
      {path: 'company', component: AboutCompanyComponent},
      {path: 'me', component: AboutMeComponent}
    ]},
  {path:'**', component: NoPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
