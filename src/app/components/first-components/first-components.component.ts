import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-first-components',
  standalone: true,
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.scss'],
  imports: [
    SidebarComponent,
    HeaderComponent,
    CardsComponent,
  ]
})
export class FirstComponentsComponent {}
