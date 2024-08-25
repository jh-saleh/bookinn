import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { authServiceFactory } from '../../hexagonal/di-factories';
import { Position } from '../../hexagonal/domain/model/position/position.model';
import { User } from '../../hexagonal/domain/model/stay/user.model';
import { AuthPort } from '../../hexagonal/domain/port/auth.port';
import { InitialsPipe } from "../../pipe/initials.pipe";
import { AppState } from '../../state/app.state';
import { UserActions } from '../../state/user/user.actions';
import { selectUser } from '../../state/user/user.selectors';
import { ModalComponent } from '../windows/modal/modal.component';

@Component({
  selector: 'account',
  standalone: true,
  imports: [CommonModule, ModalComponent, RouterModule, InitialsPipe],
  providers: [{ provide: AuthPort, useFactory: authServiceFactory }],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent implements OnInit {
  isAccountModalOpen: boolean = false;
  buttonPosition: Position = { top: 0, left: 0 };
  @ViewChild("accountRef") accountRef: ElementRef<HTMLSpanElement> | undefined;
  readonly portfolioURL: string = environment.portfolioURL;
  user?: User;
  constructor(private store: Store<AppState>, @Inject(PLATFORM_ID) private platformId: Object, private authService: AuthPort, private router: Router) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.select(selectUser).subscribe((state) => {
        this.user = state?.user;
      });
    }
  }

  closeAccountModal(): void {
    this.isAccountModalOpen = false;
  }

  openAccountModal(): void {
    this.updateModalPosition();
    this.isAccountModalOpen = true;
  }

  updateModalPosition() {
    if (this.accountRef) {
      const { top, height, right } = this.accountRef.nativeElement.getBoundingClientRect();
      this.buttonPosition = { top: top + height + 10, right: window.innerWidth - right };
    }
  }

  logOutHandler(event: MouseEvent) {
    event.stopPropagation();
    this.closeAccountModal();
    this.authService.logout();
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/home']);
  }
}