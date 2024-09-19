import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-terms-of-service-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './terms-of-service-page.component.html',
  styleUrls: ['./terms-of-service-page.component.css', '../legal-pages.css']
})
export class TermsOfServicePageComponent implements OnInit {
  baseURL!: string;

  ngOnInit(): void {
    this.baseURL = environment.baseURL;
  }
}
