import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginform: FormGroup;

  constructor(
    private login : FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.loginform = this.login.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }

  get name() {
    return this.loginform.get('username');
  }
  
  get password() {
    return this.loginform.get('password');
  }
  
  loginForm(form){
    console.log(form.value);
  }
}
