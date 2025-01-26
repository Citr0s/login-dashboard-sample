import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  standalone: true,
  imports: [ButtonModule, FormsModule, InputText, ReactiveFormsModule, Card, FloatLabel]
})
export class LoginPageComponent {

  public username: FormControl = new FormControl('', [Validators.required, Validators.min(3)]);
  public password: FormControl = new FormControl('', [Validators.required, Validators.min(3)]);

}
