import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements AfterViewInit {
  readonly searchLabel = "Search";
  displayLabel: boolean = false;
  services: string[] = ["Inns", "Carriages", "Monuments"];
  servicesId: string[] = this.services.map((service) => `${service.toLocaleLowerCase()}-service`);
  selectedService: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    // comme tous les clients composants, ils sont runs au moins une fois côté serveur (pour fetch notamment)
    // permet calcul client side 
    if (isPlatformBrowser(this.platformId)) {
      let tl = gsap.timeline();

      const servicesWrapperAnim = gsap.from('.services-wrapper', {
        opacity: 0,
        yPercent: -100,
        height: "0px",
        paused: true,
        duration: 0.2,
      }).progress(1);

      tl.fromTo(".services-wrapper", {}, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".services-wrapper",
          start: "top top",
          end: "max",
          onLeaveBack: (self) => {
            //gsap.to(window, { scrollTo: "#section2" });
          },
          onUpdate: ({ progress }) => {
            0 < progress ? servicesWrapperAnim.reverse() : servicesWrapperAnim.play();
          }
        }
      });

      const searchbarAnim = gsap.from('.searchbar', {
        paused: true,
        duration: 0.2,
        padding: "0px 0px 0px 20px",
      }).progress(1);

      tl.fromTo(".searchbar", {
      }, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".services-wrapper",
          start: "top top",
          end: "max",
          onLeaveBack: (self) => {
            //gsap.to(window, { scrollTo: "#section2" });
          },
          onUpdate: ({ progress }) => {
            0 < progress ? searchbarAnim.reverse() : searchbarAnim.play();
          }
        }
      });

      const locationInputAnim = gsap.from('.location>input', {
        paused: true,
        duration: 0.2,
        opacity: 0,
        width: "0px",
        height: "0px"
      }).progress(1);

      tl.fromTo(".location>input",
        {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? locationInputAnim.reverse() : locationInputAnim.play();
            }
          }
        });

      const checkinDivAnim = gsap.fromTo('.checkin>div', {
        opacity: 1,
        width: "80px",
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.2,
      }).progress(0);

      tl.fromTo(".checkin>div",
        {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? checkinDivAnim.play() : checkinDivAnim.reverse();
            }
          },
        });

      const checkoutDivAnim = gsap.fromTo('.checkout>div', {
        opacity: 1,
        width: "80px",
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.2,
      }).progress(0);

      tl.fromTo(".checkout>div",
        {
        },
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? checkoutDivAnim.play() : checkoutDivAnim.reverse();
            }
          }
        });

      const guestAnim = gsap.fromTo('.guests>div', {
        opacity: 1,
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.2,
      }).progress(0);

      tl.fromTo(".guests>div",
        {
          display: "block",
        },
        {
          display: "none",
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? guestAnim.play() : guestAnim.reverse();
            }
          }
        });

      tl.fromTo(".divider",
        {
          height: "calc(100% - 5px)",
        },
        {
          height: "calc(70% - 5px)",
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "+=1%",
          }
        });

      tl.fromTo(".search",
        {
          scale: 1,
        },
        {
          scale: 0.8,
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "+=1%",
          }
        });
    }
  }

  selectService(index: number) {
    this.selectedService = index;
  }

  showLabel() {
    this.displayLabel = true;
  }

  hideLabel() {
    this.displayLabel = false;
  }

  focusLocationInput(refLocationInput: HTMLInputElement) {
    refLocationInput.focus();
  }
}
