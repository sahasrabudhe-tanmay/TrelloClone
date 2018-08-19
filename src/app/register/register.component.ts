import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {

    this.registerForm  = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl(Validators.required, Validators.minLength(8)),
      confirmPassword: new FormControl(Validators.required, Validators.minLength(8)),
      email: new FormControl('', Validators.email),
      mobile: new FormControl(Validators.required, Validators.minLength(10))
    });

    console.log(this.registerForm.controls.name.valid);
  }

}
