import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StaysService } from '../../IoC/service/inn.service';
import { CardComponent } from "../../component/card/card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Stay } from '../../model/inn/stay.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  inns!: Stay[];

  constructor(private innService: StaysService) { }

  ngOnInit(): void {
    this.inns = this.innService.getStays();
  }
}
