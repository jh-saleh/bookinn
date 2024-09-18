import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
export class PhoneNavbarComponent implements OnInit, AfterViewInit {
  options: string[] = ['home', 'host', 'trips'];
  selected: string = "'home";
  user?: User;
  animations: Record<string, gsap.core.Tween> = {};

  constructor(private store: Store<AppState>, @Inject(PLATFORM_ID) private platformId: Object, private authService: AuthPort, private router: Router) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.store.select(selectUser).subscribe((state) => {
        this.user = state?.user;
      });
    }
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {
      let tl = gsap.timeline();

      this.animations["phone-navbar-wrapper"] = gsap.fromTo('.phone-navbar-wrapper', {
        y: "0px",
      }, {
        y: "100px",
        paused: true,
        duration: 0.3,
      }).progress(0);

      tl.fromTo(".phone-navbar-wrapper", {}, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".phone-navbar-wrapper",
          start: "top top",
          end: "max",
          onUpdate: ({ direction }) => {
            if (direction < 0) {
              this.animations["phone-navbar-wrapper"].reverse();
            } else {
              this.animations["phone-navbar-wrapper"].play();
            }
          }
        }
      });
    }
  }

  ngOnDestroy(): void {
    const triggers = ScrollTrigger.getAll();
    if (triggers) {
      triggers.forEach((trigger) => {
        trigger.kill();
      })
    }
  }

  logOutHandler() {
    this.authService.logout();
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/home']);
  }
}
