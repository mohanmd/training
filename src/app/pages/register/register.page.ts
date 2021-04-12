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
    private formbuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.regForm();
  }

  regForm(){
    this.registerForm = this.formbuilder.group({
      name: ['' ,[
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ]],
      email: ['' ,[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      dob: ['', [Validators.required, ]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  
  get email() {
    console.log(this.registerForm.get('email'))
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
    console.log(form);
    // this.registerForm.patchValue({
    //   name: 'Nancy',
    //   email: 'mohan@xmediasolution.com',
    //   mobile: '9710823803',
    // });
  }
  getDate(event){
    console.log(event);
  }

}
