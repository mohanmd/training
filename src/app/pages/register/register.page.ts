import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private register : FormBuilder,
    public router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.register.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      dob: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.minLength(10),  Validators.maxLength(10)]],
    });
    
    let data = moment().format('YYYY-MM-DD');
    let time = moment().format('HHmmss');
    console.log('today is: ', data + ' and time: ', time);
    
  // localStorage.removeItem('users_list');
  }

  get name() {
    return this.registerForm.get('name');
  }
  
  get email() {
    return this.registerForm.get('email');
  }
  
  get mobile() {
    return this.registerForm.get('mobile');
  }
  
  get dob() {
    return this.registerForm.get('dob');
  }
  submitForm(form: FormGroup){
    let localData, userData = [];

    console.log(localStorage.getItem("users_list") === null);
    if (localStorage.getItem("users_list") === null) {
      userData.push(form.value);
      console.log('Not stored in localstorage');
      localStorage.setItem('users_list', JSON.stringify(userData));

    }else{

     localData = localStorage.getItem('users_list');
     console.log(localData)
     localData = JSON.parse(localData);
    //  userData.push(localData);
    localData.push(form.value);
     console.log(userData);
     localStorage.setItem('users_list', JSON.stringify(localData));
     console.log(localStorage.getItem('users_list'));

    }

    this.router.navigate(['/list']);
  }

  getDate(event){
    let date = event.detail.value;
    console.log( event.detail.value)
    console.log(moment().format('DD-MM-YYYY'));
  }

  userView(){
    this.router.navigate(['/list']);
  }
}
