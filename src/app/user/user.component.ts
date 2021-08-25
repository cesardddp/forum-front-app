import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public getUser(){
    let user = {
      'nome':localStorage.getItem('nome'),
      'email':localStorage.getItem('email'),
      'token':localStorage.getItem('token'),
    }
    return user
  }
}
