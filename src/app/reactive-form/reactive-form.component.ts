import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form = new FormGroup({
  username: new FormControl('', [
  Validators.required,
  Validators.minLength(3),
  UsernameValidators.cannotContainSpace
  ]),
  password: new FormControl('', Validators.required)
  });

  get username() {
    return this.form.get('username');
  }

  login() {
    console.log('called');
    this.form.setErrors({
    invalidLogin: true
    });
    console.log(this.form);
  }
  constructor() { }

  ngOnInit() {
  }

}
