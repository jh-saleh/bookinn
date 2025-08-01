import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
export class SignupComponent implements OnDestroy {
  form!: FormGroup<{
    email: FormControl<string | null>, password: FormControl<string | null>,
    firstname: FormControl<string | null>, lastname: FormControl<string | null>
  }>;
  minPasswordLength: number = 8;
  private destroy$ = new Subject<void>();
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  signUpHandler() {
    if (this.form.valid) {
      const { email, password, firstname, lastname } = this.form.controls;
      this.userService.createUser({ email: email.value ?? "", password: password.value ?? "", firstname: firstname.value ?? "", lastname: lastname.value ?? "" })
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.router.navigate(['/login'])
        });
    }
  }
}
