import { Component } from '@angular/core';
import { LoginComponent } from "../../component/credentials/login/login.component";
import { FooterComponent } from "../../component/footer/footer.component";
import { DesktopNavbarComponent } from "../../component/navbar/desktop/desktop-navbar.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginComponent, DesktopNavbarComponent, FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
