import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = false;

  constructor(private products: ProductsService) {}

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectBrand(brand: string | null) {
    this.products.setBrand(brand);
    this.isOpen = false; // opcional: fecha ao escolher
  }
}
