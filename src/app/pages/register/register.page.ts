import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private register : FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.required),
   });
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
    console.log(form.value);
  }

  getDate(event){
    console.log(event);
  }

}
