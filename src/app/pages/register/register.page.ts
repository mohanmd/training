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
      name: new FormControl('Dayana', Validators.required),
      country: new FormControl('Uruguay', Validators.required)
   });
  }

}
