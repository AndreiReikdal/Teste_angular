import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
  ]
})

export class LoginComponent {
  validateForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      // Define your form controls here
    });
  }
}
