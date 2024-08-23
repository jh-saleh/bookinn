import { Component } from '@angular/core';
import { SignupComponent } from "../../component/credentials/signup/signup.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [NavbarComponent, SignupComponent, FooterComponent],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {

}
