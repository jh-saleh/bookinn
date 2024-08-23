import { Component } from '@angular/core';
import { LoginComponent } from "../../component/credentials/login/login.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, NavbarComponent, FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
