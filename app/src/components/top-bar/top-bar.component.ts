import { Component } from '@angular/core';
import { Button, ButtonModule } from 'primeng/button';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddon } from 'primeng/inputgroupaddon';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { Toolbar } from 'primeng/toolbar';
import { IconField } from 'primeng/iconfield';
import { SplitButton } from 'primeng/splitbutton';
import { InputIcon } from 'primeng/inputicon';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss',
  standalone: true,
  imports: [
    Toolbar,
    Button,
    IconField
  ]
})
export class TopBarComponent {

}
