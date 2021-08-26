import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
// import { Router } from '@angular/router';
// 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public loginForm!: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private rest: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl(),//["", [Validators.required,Validators.email]],
      senha: ["", [Validators.required]],
    });
  }

  login(){
    this.rest.login(this.loginForm).subscribe(
      data => {
        if(data.status===200){
          localStorage.setItem('token',data.body.token);
          // 
          this.getUser();
          // this.router.navigate([''])  
        }
      }
    );
  }
  getUser(){
    this.rest.getUser().subscribe(
      data => {
        localStorage.setItem('nome',data.body.nome);
        localStorage.setItem('email',data.body.email);
        localStorage.setItem('id',data.body.id);
        localStorage.setItem('role',data.body.role);
        this.router.navigate([''])  

      }
    );
  }
  


}
