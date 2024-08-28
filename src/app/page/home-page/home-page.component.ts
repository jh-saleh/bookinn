import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StayCardComponent } from "../../component/card/stay-card/stay-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { stayServiceFactory } from '../../hexagonal/di-factories';
import { Stay } from '../../hexagonal/domain/model/stay/stay.model';
import { StayPort } from '../../hexagonal/domain/port/stay.port';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, StayCardComponent],
  providers: [{ provide: StayPort, useFactory: stayServiceFactory }],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  stays!: Stay[];

  constructor(private stayService: StayPort) { }

  ngOnInit(): void {
    this.stayService.getHomePageStays().subscribe((stays) => this.stays = stays);
  }
}