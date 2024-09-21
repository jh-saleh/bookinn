import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { userServiceFactory } from './hexagonal/di-factories';
import { UserPort } from './hexagonal/domain/port/user.port';
import { AppState } from './state/app.state';
import { selectIsHTMLBodyLocked } from './state/htmlBody/htmlBody.selectors';
import { UserActions } from './state/user/user.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [{ provide: UserPort, useFactory: userServiceFactory }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  isHTMLBodyLocked$!: Observable<boolean>;

  constructor(private store: Store<AppState>, @Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document, private userService: UserPort) { }

  ngOnInit(): void {
    this.isHTMLBodyLocked$ = this.store.select(selectIsHTMLBodyLocked);
    this.isHTMLBodyLocked$.subscribe((state) => {
      if (state) {
        this.document.body.style.overflow = 'hidden';
      } else {
        this.document.body.style.overflow = 'auto';
      }
    });
    this.userService.getUser().subscribe((user) => {
      this.store.dispatch(UserActions.setUser({ user }));
    });
  }
}