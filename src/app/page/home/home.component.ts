import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { environment } from '../../../environments/environment';
import { CardComponent } from "../../component/card/card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Inn } from '../../model/inn.model';
import { InnService } from '../../service/inn/inn.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  readonly portfolioURL: string = environment.portfolioURL;
  readonly droplets: number = 50;
  sectionAnimation = {
    "section1": true,
    "hide": false
  };
  inns!: Inn[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, innService: InnService) {
    this.inns = innService.getHomePageInns();
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    if (isPlatformBrowser(this.platformId)) {
      let tl1 = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: ".section1",
          scrub: true,
          pin: true,
          start: "top top",
          end: "+=1100%",
          onLeave: (self) => {
            gsap.to(window, { scrollTo: "#section2" });
          }
        }
      });
      tl1.fromTo(".bookinn",
        { xPercent: 0, x: "center" },
        {
          xPercent: 50,
          scrollTrigger: {
            start: "0% top",
            end: "+=100%",
            scrub: 1,
          }
        }).fromTo(".o1", { opacity: 1 }, {
          opacity: 0, scrollTrigger: {
            end: "100%",
            scrub: 1
          }
        }).fromTo(".o2", { opacity: 1 }, {
          opacity: 0, scrollTrigger: {
            end: "80%",
            scrub: 1
          }
        }).fromTo(".k", { opacity: 1 }, {
          opacity: 0, scrollTrigger: {
            end: "60%",
            scrub: 1
          }
        }).fromTo(".I", { opacity: 1 }, {
          opacity: 0, scrollTrigger: {
            end: "40%",
            scrub: 1
          }
        }).fromTo(".n1", { opacity: 1 }, {
          opacity: 0, scrollTrigger: {
            end: "20%",
            scrub: 1
          }
        }).fromTo(".n2", { opacity: 1 }, {
          opacity: 0,
          scrollTrigger: {
            end: "15%",
            scrub: 1,
          }
        });

      tl1.to(".b-bar", {
        scale: 10,
        rotateZ: "55deg",
        xPercent: -5000,
        yPercent: -300,
        display: "none",
        scrollTrigger: {
          start: "150% top",
          end: "+=100%",
          scrub: 1,
        },
      })

      tl1.fromTo(".b-small-circle", {
        scale: 1,
      }, {
        scale: 10,
        rotateZ: "-60deg",
        xPercent: 2000,
        yPercent: -900,
        display: "none",
        scrollTrigger: {
          start: "150% top",
          end: "+=100%",
          scrub: 1,
        },
      })

      tl1.fromTo(".b-big-circle", {
        scale: 1,
      }, {
        scale: 10,
        rotateZ: "90deg",
        xPercent: 100,
        yPercent: 650,
        display: "none",
        scrollTrigger: {
          start: "150% top",
          end: "+=100%",
          scrub: 1,
        },
      });

      tl1.fromTo(".pitch", {
        opacity: 0,
        scale: 1,
      }, {
        opacity: 1,
        scale: 2,
        scrollTrigger: {
          start: "170% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to(".pitch", {
        opacity: 0,
        scrollTrigger: {
          start: "300% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo(".author", {
        opacity: 0,
        display: "none"
      }, {
        opacity: 1,
        display: "grid",
        scrollTrigger: {
          start: "700% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to(".author", {
        opacity: 0,
        scrollTrigger: {
          start: "1000% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo(".home-button", {
        opacity: 1
      }, {
        opacity: 0,
        scrollTrigger: {
          start: "0% top",
          end: "+=10%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops1", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "450% top",
          end: "+=50%",
          scrub: 1,
        }
      }).to("#drops1", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops2", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "500% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops2", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops3", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "550% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops3", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops4", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "600% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops4", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops5", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "650% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops5", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops6", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "700% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops6", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });

      tl1.fromTo("#drops7", {
        opacity: 0,
        scale: 0.8,
        yPercent: -20,
        xPercent: 10,
      }, {
        opacity: 1,
        scale: 1,
        yPercent: 0,
        xPercent: 0,
        scrollTrigger: {
          start: "750% top",
          end: "+=100%",
          scrub: 1,
        }
      }).to("#drops7", {
        opacity: 0,
        scrollTrigger: {
          start: "900% top",
          end: "+=100%",
          scrub: 1,
        }
      });
    }
  }

}
