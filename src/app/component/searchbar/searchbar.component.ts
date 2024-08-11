import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { css } from '@emotion/css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDate } from '../../IoC/service/calendar-dates.service';
import { Position } from '../../model/position/position.model';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { PluralizePipe } from '../../pipe/pluralize.pipe';
import { CalendarComponent } from "../calendar/calendar.component";
import { GuestType, Guests, GuestsComponent } from "../guests/guests.component";
import { ModalComponent } from '../windows/modal/modal.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CalendarComponent, ModalComponent, CommonModule, GuestsComponent, PluralizePipe, CalendarDateFormatPipe],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements AfterViewInit {
  readonly searchLabel = "Search";
  services: string[] = ["Inns", "Carriages", "Monuments"];
  servicesId: string[] = this.services.map((service) => `${service.toLocaleLowerCase()}-service`);
  selectedService: number = 0;
  isCalendarOpen: boolean = false;
  calendarPosition: Position = { top: 0, left: 0 };
  startingDate: CalendarDate | undefined;
  endingDate: CalendarDate | undefined;
  @ViewChild("searchBarRef") searchBarRef: ElementRef<HTMLDivElement> | undefined;
  calendarWrapperClass: string = css``;
  isGuestsOpen: boolean = false;
  guestsWrapperClass: string = css``;
  guestsPosition: Position = { top: 0, left: 0 };
  guests: Guests | undefined;
  totalNbOfGuests: number = 0;
  statusOfSearchBar: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  animations: Record<string, gsap.core.Tween> = {};

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    // comme tous les clients composants, ils sont runs au moins une fois côté serveur (pour fetch notamment)
    // permet calcul client side 
    if (isPlatformBrowser(this.platformId)) {
      let tl = gsap.timeline();

      this.animations["services-wrapper"] = gsap.fromTo('.services-wrapper', {
        y: "0px",
      }, {
        y: "-100px",
        height: "0px",
        paused: true,
        duration: 0.3,
        onComplete: () => {
          this.statusOfSearchBar = false;
        },
        onReverseComplete: () => {
          this.statusOfSearchBar = true;
        }
      }).progress(0);

      tl.fromTo(".services-wrapper", {}, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".services-wrapper",
          start: "top top",
          end: "max",
          onUpdate: ({ progress }) => {
            if (progress === 0) {
              this.animations["services-wrapper"].reverse();
            } else {
              this.isCalendarOpen = false;
              this.isGuestsOpen = false;
              this.animations["services-wrapper"].play();
            }
          }
        }
      });

      this.animations["searchbar"] = gsap.fromTo('.searchbar', {
        padding: "10px 10px 10px 30px",
      }, {
        padding: "0px 0px 0px 20px",
        paused: true,
        duration: 0.3,
      }).progress(0);

      tl.fromTo(".searchbar", {
      }, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".services-wrapper",
          start: "top top",
          end: "max",
          onUpdate: ({ progress }) => {
            0 < progress ? this.animations["searchbar"].play() : this.animations["searchbar"].reverse();
          }
        }
      });

      this.animations["location>input"] = gsap.fromTo('.location>input', {
        opacity: 1,
        width: "250px",
        height: "20px",
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        paused: true,
        duration: 0.3,
      }).progress(0);

      tl.fromTo(".location>input",
        {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? this.animations["location>input"].play() : this.animations["location>input"].reverse();
            }
          }
        });

      this.animations["checkin-date"] = gsap.fromTo('.checkin-date', {
        opacity: 1,
        width: "80px",
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.3,
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
              0 < progress ? this.animations["checkin-date"].play() : this.animations["checkin-date"].reverse();
            }
          },
        });

      this.animations["checkout-date"] = gsap.fromTo('.checkout-date', {
        opacity: 1,
        width: "80px",
      }, {
        opacity: 0,
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.3,
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
              0 < progress ? this.animations["checkout-date"].play() : this.animations["checkout-date"].reverse();
            }
          }
        });

      this.animations["nb-of-guests"] = gsap.fromTo('.nb-of-guests', {
        opacity: 1,
        minWidth: "5.5rem",
      }, {
        opacity: 0,
        minWidth: "0px",
        width: "0px",
        height: "0px",
        visibility: "hidden",
        paused: true,
        duration: 0.3,
      }).progress(0);

      tl.fromTo(".nb-of-guests", {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? this.animations["nb-of-guests"].play() : this.animations["nb-of-guests"].reverse();
            }
          }
        });

      this.animations["divider"] = gsap.fromTo(".divider", {
        height: "calc(100% - 5px)",
      }, {
        height: "calc(70% - 5px)",
        paused: true,
        duration: 0.3
      }).progress(0);

      tl.fromTo(".divider", {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? this.animations["divider"].play() : this.animations["divider"].reverse();
            }
          }
        });

      this.animations["search"] = gsap.fromTo(".search", {
        scale: 1,
      },
        {
          scale: 0.8,
          duration: 0.3,
          paused: true,
        }).progress(0);

      tl.fromTo(".search", {},
        {
          scrollTrigger: {
            scrub: true,
            trigger: ".services-wrapper",
            start: "top top",
            end: "max",
            onUpdate: ({ progress }) => {
              0 < progress ? this.animations["search"].play() : this.animations["search"].reverse();
            }
          }
        });
    }
  }

  selectService(index: number) {
    this.selectedService = index;
  }

  focusLocationInput(refLocationInput: HTMLInputElement) {
    this.openSearchBar();
    const locationSearch: string = refLocationInput.value;
    refLocationInput.focus();
    refLocationInput.setSelectionRange(locationSearch.length, locationSearch.length);
  }

  updateCalendarModalPosition() {
    if (this.searchBarRef) {
      const { top, height, width, left } = this.searchBarRef.nativeElement.getBoundingClientRect();
      this.calendarPosition = { top: top + height + 10, left: left };
      this.calendarWrapperClass = css`
        width: ${width}px;
        padding: 12px 0px;
        display: grid;
        justify-items: center;
      `;
    }
  }

  closeCalendar() {
    this.isCalendarOpen = false;
  }

  openCalendar() {
    const openCalendarHandler = () => {
      this.updateCalendarModalPosition();
      this.isCalendarOpen = true;
    }
    if (this.statusOfSearchBar) {
      openCalendarHandler();
    } else {
      this.openSearchBar();
      setTimeout(() => {
        openCalendarHandler();
      }, 500);
    }
  }

  setStartingDate(date: CalendarDate | undefined) {
    this.startingDate = date;
  }

  setEndingDate(date: CalendarDate | undefined) {
    this.endingDate = date;
  }

  updateGuestsModalPosition() {
    if (this.searchBarRef) {
      const { top, height, right, } = this.searchBarRef.nativeElement.getBoundingClientRect();
      this.guestsPosition = { top: top + height + 10, right: window.innerWidth - right };
      this.guestsWrapperClass = css`
        padding: 20px;
      `;
    }
  }

  closeGuests() {
    this.isGuestsOpen = false;
  }

  openGuests() {
    const openGuestsHandler = () => {
      this.updateGuestsModalPosition();
      this.isGuestsOpen = true;
    }
    if (this.statusOfSearchBar) {
      openGuestsHandler();
    } else {
      this.openSearchBar();
      setTimeout(() => {
        openGuestsHandler();
      }, 500);
    }
  }

  getGuests(guests: Guests) {
    this.guests = { ...guests };
    if (this.guests) {
      this.totalNbOfGuests = 0;
      for (let guest in this.guests) {
        this.totalNbOfGuests += this.guests[guest as GuestType].nb
      }
    }
  }

  openSearchBar() {
    for (let animation in this.animations) {
      this.animations[animation].reverse();
    }
    this.statusOfSearchBar = true;
  }

  closeSearchBar() {
    for (let animation in this.animations) {
      this.animations[animation].play();
    }
    this.statusOfSearchBar = false;
  }
}
