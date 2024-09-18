import { Component } from '@angular/core';
import { SignupComponent } from "../../component/credentials/signup/signup.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [DesktopNavbarComponent, SignupComponent, FooterComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

}
