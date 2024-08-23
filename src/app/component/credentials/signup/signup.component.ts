import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { atLeastOneUpperCaseCharacterAndOneLowerCaseCharacterAndOneNumberValidator } from '../../../forms-validators/AtLeastOneUpperCaseCharacterAndOneLowerCaseCharacterAndOneNumberValidator';
import { isStrengthGood } from '../../../forms-validators/isStrengthGood';
import { userServiceFactory } from '../../../hexagonal/di-factories';
import { UserPort } from '../../../hexagonal/domain/port/user.port';
import { AnimatedInputComponent } from "../../animated-input/animated-input.component";

@Component({
  selector: 'signup',
  standalone: true,
  imports: [AnimatedInputComponent, ReactiveFormsModule],
  providers: [{ provide: UserPort, useFactory: userServiceFactory }],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../credentials.css']
})
export class SignupComponent {
  form!: FormGroup<{
    email: FormControl<string | null>, password: FormControl<string | null>,
    firstname: FormControl<string | null>, lastname: FormControl<string | null>
  }>;
  minPasswordLength: number = 8;

  constructor(private fb: FormBuilder, private userService: UserPort, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPasswordLength),
      atLeastOneUpperCaseCharacterAndOneLowerCaseCharacterAndOneNumberValidator(), isStrengthGood()]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]]
    });
  }

  signUpHandler() {
    if (this.form.valid) {
      const { email, password, firstname, lastname } = this.form.controls;
      this.userService.createUser({ email: email.value ?? "", password: password.value ?? "", firstname: firstname.value ?? "", lastname: lastname.value ?? "" })
        .subscribe(() => {
          this.router.navigate(['/login'])
        });
    }
  }
}
