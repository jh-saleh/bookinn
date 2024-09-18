import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { authServiceFactory } from '../../../hexagonal/di-factories';
import { User } from '../../../hexagonal/domain/model/stay/user.model';
import { AuthPort } from '../../../hexagonal/domain/port/auth.port';
import { AppState } from '../../../state/app.state';
import { UserActions } from '../../../state/user/user.actions';
import { selectUser } from '../../../state/user/user.selectors';

@Component({
  selector: 'phone-navbar',
  standalone: true,
  imports: [RouterModule],
  providers: [{ provide: AuthPort, useFactory: authServiceFactory }],
  templateUrl: './phone-navbar.component.html',
  styleUrl: './phone-navbar.component.css'
})
export class PhoneNavbarComponent implements OnInit {
  options: string[] = ['home', 'host', 'trips'];
  selected: string = "'home";
  user?: User;

  constructor(private store: Store<AppState>, @Inject(PLATFORM_ID) private platformId: Object, private authService: AuthPort, private router: Router) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.select(selectUser).subscribe((state) => {
        this.user = state?.user;
      });
    }
  }

  logOutHandler() {
    this.authService.logout();
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/home']);
  }
}
