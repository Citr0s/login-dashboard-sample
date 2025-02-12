import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideFacebook, lucideGithub, lucideLoaderCircle, lucideTwitter } from '@ng-icons/lucide';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { HlmIconDirective } from '@spartan-ng/ui-icon-helm';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [
    HlmButtonDirective,
    NgIcon,
    HlmIconDirective,
    HlmInputDirective,
    FormsModule,
    HlmLabelDirective,
  ],
  host: {
    class: 'block',
  },
  providers: [provideIcons({ lucideGithub, lucideLoaderCircle, lucideFacebook, lucideTwitter })],
  templateUrl: 'login-form.component.html',
  styleUrl: 'login-form.component.scss'
})
export class LoginFormComponent {

  public isLoading = signal(false);

  public send(): void {
    this.isLoading.set(true);
    setTimeout(() => this.isLoading.set(false), 3000);
  }
}
