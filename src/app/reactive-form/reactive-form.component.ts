import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  this.userForm = this.formBuilder.group({
    emailform: ['', [Validators.required, Validators.email]],
    passwordform: ['', [Validators.required, Validators.minLength(6)]],
  });
}

get emailControl() {
  return this.userForm.controls['emailform'];
}
get emailControlIsInvalid() {
  return this.userForm.controls['emailform'].invalid && this.userForm.controls['emailform'].touched
  ;
}
get emailControlIsValid() {
  return this.userForm.controls['emailform'].valid && this.userForm.controls['emailform'].touched
  ;
}

get passwordControl () {
  return this.userForm.controls['passwordform'];
}
get passwordControlIsInvalid() {
  return this.userForm.controls['passwordform'].invalid && this.userForm.controls['passwordform'].touched;
}
get passwordControlIsValid() {
  return this.userForm.controls['passwordform'].valid && this.userForm.controls['passwordform'].touched;
}

Onsubmit() : void {
  console.log(this.userForm);
}
}