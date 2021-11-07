import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <p>
      home works!
    </p>
      <ul *ngFor="let user of userList">
      <app-user-list
              [user]="user">
      </app-user-list>
    </ul>
    <app-post-list></app-post-list>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  userList: any[] = [
    {name: 'user 1', phone: '92839283', socialIds: ['one', 'two', 'three']},
    {name: 'user 2', phone: '92839283', socialIds: ['one', 'three']},
    {name: 'user 3', phone: '92839283', socialIds: ['two', 'three']},
    {name: 'user 4', phone: '92839283'},
    {name: 'user 5', phone: '92839283'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
