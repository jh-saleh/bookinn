import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Position } from '../../model/position/position.model';
import { CalendarDate } from '../../service/calendar-dates/calendar-dates.service';
import { CalendarComponent } from "../calendar/calendar.component";
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CalendarComponent, ModalComponent, CommonModule],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements AfterViewInit {
  readonly searchLabel = "Search";
  displayLabel: boolean = false;
  services: string[] = ["Inns", "Carriages", "Monuments"];
  servicesId: string[] = this.services.map((service) => `${service.toLocaleLowerCase()}-service`);
  selectedService: number = 0;
  isCalendarOpen: boolean = false;
  calendarPosition: Position = { top: 0, left: 0 };
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  @ViewChild("searchBarRef") searchBarRef: ElementRef<HTMLDivElement> | undefined;

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
            if (0 < progress) {
              this.isCalendarOpen = false;
              servicesWrapperAnim.reverse();
            } else {
              servicesWrapperAnim.play();
            }
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

      const checkinDivAnim = gsap.fromTo('.checkin-date', {
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

      tl.fromTo(".checkin-date",
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

      const checkoutDivAnim = gsap.fromTo('.checkout-date', {
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

      tl.fromTo(".checkout-date",
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

  updateCalendarModalPosition() {
    if (this.searchBarRef) {
      const { top, height, left } = this.searchBarRef.nativeElement.getBoundingClientRect();
      this.calendarPosition = { top: top + height + 10, left: left + 45 };
    }
  }

  closeCalendar() {
    this.isCalendarOpen = false;
  }

  openCalendar() {
    this.updateCalendarModalPosition();
    this.isCalendarOpen = true;
  }

  setStartingDate(date: CalendarDate | undefined) {
    this.startingDate = date;
  }

  setEndingDate(date: CalendarDate | undefined) {
    this.endingDate = date;
  }
}
