import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { authServiceFactory, userServiceFactory } from '../../../hexagonal/di-factories';
import { AuthPort } from '../../../hexagonal/domain/port/auth.port';
import { UserPort } from '../../../hexagonal/domain/port/user.port';
import { AppState } from '../../../state/app.state';
import { UserActions } from '../../../state/user/user.actions';
import { AnimatedInputComponent } from "../../animated-input/animated-input.component";

@Component({
  selector: 'login',
  standalone: true,
  imports: [AnimatedInputComponent, ReactiveFormsModule],
  providers: [{ provide: AuthPort, useFactory: authServiceFactory }, { provide: UserPort, useFactory: userServiceFactory }],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../credentials.css']
})
export class LoginComponent implements OnDestroy {
  form!: FormGroup<{ email: FormControl<string | null>, password: FormControl<string | null> }>;
  areWrongCrendentials: boolean = false;
  readonly defaultRedirectUrl = '/home';
  redirectUrl: string = "/home";
  private destroy$ = new Subject<void>();
  constructor(private fb: FormBuilder, private authService: AuthPort, private router: Router, private route: ActivatedRoute, private store: Store<AppState>
    , private userService: UserPort) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    this.redirectUrl = this.route.snapshot.queryParamMap.get('redirectUrl') ?? "/home";
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  logInHandler() {
    if (this.form.valid) {
      const { email, password } = this.form.controls;
      // call api
      this.authService.login(email.value ?? "", password.value ?? "")
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          if (response) {
            this.userService.getUser()
              .pipe(takeUntil(this.destroy$))
              .subscribe((user) => {
                if (user) {
                  this.store.dispatch(UserActions.setUser({ user: user }));
                  this.areWrongCrendentials = false;
                  this.router.navigateByUrl(this.redirectUrl, { replaceUrl: this.redirectUrl !== this.defaultRedirectUrl });
                } else {
                  this.areWrongCrendentials = true;
                }
              });
          }
        });
    }
  }

  logInAsGuestHandler() {
    this.authService.login("guest-demo@demo.com", "123")
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        if (response) {
          this.userService.getUser()
            .pipe(takeUntil(this.destroy$))
            .subscribe((user) => {
            if (user) {
              this.store.dispatch(UserActions.setUser({ user: user }));
              this.areWrongCrendentials = false;
              this.router.navigateByUrl(this.redirectUrl, { replaceUrl: this.redirectUrl !== this.defaultRedirectUrl });
            } else {
              this.areWrongCrendentials = true;
            }
          });
        }
      });
  }
}
