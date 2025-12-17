import { Component } from '@angular/core';
import { FirstComponentsComponent } from './components/first-components/first-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponentsComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {}
