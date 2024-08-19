import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaysService } from '../../IoC/service/stay.service';
import { RoomCardComponent } from "../../component/card/room-card/room-card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Stay } from '../../model/stay/stay.model';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, RoomCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  stays!: Stay[];

  constructor(private innService: StaysService) { }

  ngOnInit(): void {
    this.stays = this.innService.getHomePageStays();
  }
}