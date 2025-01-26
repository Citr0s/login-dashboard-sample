import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from '../components/top-bar/top-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'app';
}
