import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-basic-form-form',
  templateUrl: './basic-form-form.component.html',
  styleUrls: ['./basic-form-form.component.scss']
})
export class BasicFormFormComponent implements OnInit {
  validateForm: FormGroup;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.validateForm = this.formBuilder.group({
      email: [null, [Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      phoneNumberPrefix: ['+86'],
      phoneNumber: [null, [Validators.required]],
      website: [null, [Validators.required]],
      captcha: [null, [Validators.required]],
      agree: [false]
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  updateConfirmValidator(): void {
    Promise.resolve().then(() => {
      this.validateForm.controls.checkPassword.updateValueAndValidity();
    });
  }
}
