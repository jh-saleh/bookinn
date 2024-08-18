import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Inject, Input, OnDestroy, Output, PLATFORM_ID, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { css } from '@emotion/css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CalendarDate } from '../../IoC/service/calendar-dates.service';
import { Position } from '../../model/position/position.model';
import { CalendarDateFormatPipe } from '../../pipe/calendar-date-format.pipe';
import { CamelToSentencePipe } from '../../pipe/cameltosentence.pipe';
import { PluralizePipe } from '../../pipe/pluralize.pipe';
import { AutocompletionComponent } from "../autocompletion/autocompletion.component";
import { CalendarComponent } from "../calendar/calendar.component";
import { GuestType, Guests, GuestsComponent } from "../guests/guests.component";
import { ModalComponent } from '../windows/modal/modal.component';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [CalendarComponent, ModalComponent, CommonModule, GuestsComponent, PluralizePipe, CalendarDateFormatPipe, FormsModule, CamelToSentencePipe, AutocompletionComponent],
  providers: [CalendarDateFormatPipe],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.css'
})
export class SearchbarComponent implements AfterViewInit, OnDestroy {
  readonly searchLabel = "Search";
  services: string[] = ["stays", "carriages", "monuments"];
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
  @ViewChild("locationInputRef") locationInputRef: ElementRef<HTMLInputElement> | undefined;
  locationInput!: string;
  isAutocompletionOpen: boolean = false;
  autocompletionPosition: Position = { top: 0, left: 0 };
  autocompletionWrapperClass: string = css``;
  isNavbarStuckToStart = true;
  @Input({ required: false }) startingState: 'minimized' | 'normal' = 'normal';
  @Output() sendSearchbarStatus = new EventEmitter<boolean>();
  @Input() set searchbarStatus(open: boolean) {
    if (open) {
      this.openSearchbar(false);
    } else {
      if (!this.isNavbarStuckToStart) {
        this.closeSearchBar(false);
      }
    }
  }

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router, private calendarDateFormatPipe: CalendarDateFormatPipe) {

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

      tl.fromTo(".services-wrapper", {}, {
        scrollTrigger: {
          refreshPriority: 0,
          scrub: true,
          trigger: ".services-wrapper",
          start: "top top",
          end: "max",
          onUpdate: ({ progress }) => {
            this.isNavbarStuckToStart = progress === 0;
            this.sendSearchbarStatus.emit(false);
            if (progress === 0) {
              this.animations["services-wrapper"].reverse();
            } else {
              this.isCalendarOpen = false;
              this.isGuestsOpen = false;
              this.isAutocompletionOpen = false;
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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
      }).progress(this.startingState === 'normal' ? 0 : 1);

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
        }).progress(this.startingState === 'normal' ? 0 : 1);

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

  ngOnDestroy(): void {
    // https://gsap.com/community/forums/topic/24365-problem-with-killing-and-reinitialising-scrolltrigger-after-single-page-app-page-transition/?do=findComment&comment=140707
    const triggers = ScrollTrigger.getAll();
    if (triggers) {
      triggers.forEach((trigger) => {
        trigger.kill();
      })
    }
  }

  selectService(index: number) {
    this.selectedService = index;
  }

  focusLocationInput(locationInputRef: HTMLInputElement) {
    const openAutocompletionHandler = () => {
      this.updateAutocompletionModalPosition();
      this.openSearchbar();
      const locationSearch: string = locationInputRef.value;
      locationInputRef.focus();
      locationInputRef.setSelectionRange(locationSearch.length, locationSearch.length);
    }
    if (this.statusOfSearchBar) {
      openAutocompletionHandler();
    } else {
      this.openSearchbar();
      setTimeout(() => {
        openAutocompletionHandler();
      }, 500);
    }
  }

  autocompletionOpenStatusHandler() {
    if (this.locationInput.length > 0) {
      this.sendSearchbarStatus.emit(true);
      this.isAutocompletionOpen = true;
    } else {
      this.closeAutocompletion();
    }
  }

  closeAutocompletion() {
    this.isAutocompletionOpen = false;
  }

  updateAutocompletionModalPosition() {
    if (this.locationInputRef && this.searchBarRef) {
      const { width } = this.locationInputRef.nativeElement.getBoundingClientRect();
      const { top, height, left } = this.searchBarRef.nativeElement.getBoundingClientRect();
      this.autocompletionPosition = { top: top + height + 10, left: left };
      this.autocompletionWrapperClass = css`
        width: ${width + 30}px;
        padding: 12px;
      `;
    }
  }

  getLocationSuggestion(location: string) {
    this.locationInput = location;
    this.isAutocompletionOpen = false;
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
      this.sendSearchbarStatus.emit(true);
      this.updateCalendarModalPosition();
      this.isCalendarOpen = true;
    }
    if (this.statusOfSearchBar) {
      openCalendarHandler();
    } else {
      this.openSearchbar();
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
      this.sendSearchbarStatus.emit(true);
      this.updateGuestsModalPosition();
      this.isGuestsOpen = true;
    }
    if (this.statusOfSearchBar) {
      openGuestsHandler();
    } else {
      this.openSearchbar();
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

  openSearchbar(emit: boolean = true) {
    for (let animation in this.animations) {
      this.animations[animation].reverse();
    }
    this.statusOfSearchBar = true;
    if (emit) {
      this.sendSearchbarStatus.emit(this.statusOfSearchBar);
    }
  }

  closeSearchBar(emit: boolean = true) {
    for (let animation in this.animations) {
      this.animations[animation].play();
    }
    this.statusOfSearchBar = false;
    if (emit) {
      this.sendSearchbarStatus.emit(this.statusOfSearchBar);
    }
  }

  searchHandler() {
    this.router.navigate(["/s/", this.locationInput, this.services[this.selectedService]], {
      queryParams: {
        startDate: this.calendarDateFormatPipe.transform(this.startingDate, "MM-dd-yyy"),
        endDate: this.calendarDateFormatPipe.transform(this.endingDate, "MM-dd-yyy"),
        nbGuests: this.totalNbOfGuests === 0 ? undefined : this.totalNbOfGuests
      }
    });
    this.closeSearchBar();
  }
}
