import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { StayCardComponent } from "../../component/card/stay-card/stay-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";
import { PhoneNavbarComponent } from "../../component/navbar/phone/phone-navbar.component";
import { stayServiceFactory } from '../../hexagonal/di-factories';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';
import { StayPort } from '../../hexagonal/domain/port/stay.port';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule, DesktopNavbarComponent, FooterComponent, StayCardComponent, PhoneNavbarComponent],
  providers: [{ provide: StayPort, useFactory: stayServiceFactory }],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit, OnDestroy {
  stays!: Stay[];
  private destroy$ = new Subject<void>();

  constructor(private stayService: StayPort) { }

  ngOnInit(): void {
    this.stayService.getHomePageStays()
      .pipe(takeUntil(this.destroy$))
      .subscribe((stays) => this.stays = stays);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}