import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  users: any;

  constructor() { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    console.log(JSON.parse(localStorage.getItem('users_list')));
    this.users = JSON.parse(localStorage.getItem('users_list'));
  }
}
