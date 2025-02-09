import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Menu } from 'primeng/menu';
import { Badge } from 'primeng/badge';
import { MenuItem } from 'primeng/api';
import { Ripple } from 'primeng/ripple';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Card } from 'primeng/card';
import { Panel } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss',
  standalone: true,
  imports: [ButtonModule, FormsModule, ReactiveFormsModule, Menu, Badge, Ripple, NgIf, RouterLink, Card, Panel, ChartModule]
})
export class DashboardPageComponent implements OnInit {

  public items: MenuItem[] | undefined;
  public data: any;
  public options: any;

  private _cd: ChangeDetectorRef;

  constructor(cd: ChangeDetectorRef) {
    this._cd = cd;
  }

  public ngOnInit(): void {
    this.items = [
      {
        separator: true
      },
      {
        label: 'Dashboard',
        items: [
          {
            label: 'Upload Stock',
            icon: 'pi pi-plus',
          },
          {
            label: 'Orders',
            icon: 'pi pi-search'
          },
          {
            label: 'Inventory Management',
            icon: 'pi pi-book'
          }
        ]
      },
      {
        separator: true
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog'
          },
          {
            label: 'Messages',
            icon: 'pi pi-inbox',
            badge: '2'
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            url: '/logout'
          }
        ]
      }
    ];

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--p-cyan-500')
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: documentStyle.getPropertyValue('--p-orange-500')
        },
        {
          label: 'Third Dataset',
          data: [12, 51, 62, 33, 21, 62, 45],
          fill: true,
          borderColor: documentStyle.getPropertyValue('--p-gray-500'),
          tension: 0.4,
          backgroundColor: 'rgba(107, 114, 128, 0.2)'
        }
      ]
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

    this._cd.markForCheck();
  }
}
