import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
userForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  this.userForm = this.formBuilder.group({
    emailform: this.formBuilder.control(''),
    passwordform: this.formBuilder.control(''),
  });
}
}
