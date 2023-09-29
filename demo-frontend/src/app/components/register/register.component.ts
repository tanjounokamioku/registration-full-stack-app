import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  submitted = false;
  registrationSuccess = false;
  registrationFailed = false;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {
    this.registrationForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  ngOnInit() {}

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    const user = {
      name: this.registrationForm.value.name,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
    };

    this.registerService.registerUser(user).subscribe(
      (response: any) => {
        console.log('Registration successful', response);
        this.registrationSuccess = true;
        this.registrationFailed = false;
      },
      (error: any) => {
        console.error('Registration error', error);
        this.registrationFailed = true;
        this.registrationSuccess = false;
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}
