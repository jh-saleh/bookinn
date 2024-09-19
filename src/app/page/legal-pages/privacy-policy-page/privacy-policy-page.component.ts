import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-privacy-policy-page',
  standalone: true,
  imports: [],
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.css', '../legal-pages.css']
})
export class PrivacyPolicyPageComponent implements OnInit {
  baseURL!: string;

  ngOnInit(): void {
    this.baseURL = environment.baseURL;
  }
}
