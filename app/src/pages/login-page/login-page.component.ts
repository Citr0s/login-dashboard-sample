import { Component } from '@angular/core';
import { LoginFormComponent } from './components/login-form/login-form.component';

@Component({
  selector: 'login-page',
  imports: [LoginFormComponent],
  templateUrl: 'login-page.component.html',
  styleUrl: 'login-page.component.scss',
  standalone: true,
})
export default class LoginPageComponent {
}
