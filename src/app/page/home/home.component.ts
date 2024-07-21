import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../component/card/card.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { Inn } from '../../model/inn/inn.model';
import { InnService } from '../../service/inn/inn.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  inns!: Inn[];

  constructor(private innService: InnService) { }

  ngOnInit(): void {
    this.inns = this.innService.getHomePageInns();
  }
}
