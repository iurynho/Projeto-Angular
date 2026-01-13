import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { CarouselComponent } from '../carousel/carousel.component';


@Component({
  selector: 'app-first-components',
  standalone: true,
  templateUrl: './first-components.component.html',
  styleUrls: ['./first-components.component.scss'],
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    CarouselComponent
]
})
export class FirstComponentsComponent {}