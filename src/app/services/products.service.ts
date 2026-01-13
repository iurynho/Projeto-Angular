import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Lista base de produtos mockados para exibição no carrossel.
  // Usamos um Signal ao invés de array puro para permitir reatividade do Angular
  products = signal<Product[]>([
    { id: 1, name: 'iPhone 15', brand: 'Apple', image: 'iphone15.png', price: 7999 },
    { id: 2, name: 'Galaxy S24', brand: 'Samsung', image: 's24.png', price: 6999 },
    { id: 3, name: 'Moto G84', brand: 'Motorola', image: 'motog84.png', price: 1999 },
    { id: 4, name: 'Galaxy A15', brand: 'Samsung', image: 'a15.png', price: 1299 },
    { id: 5, name: 'iPad 10', brand: 'Apple', image: 'ipad10.png', price: 3999 }
  ]);

  // Estado reativo da marca selecionada
  // null representa "todas as marcas".
  // pois evita condicionais complexas para "sem filtros".
  selectedBrand = signal<string | null>(null);

  // Quando selectedBrand() muda, o computed é recalculado automaticamente
  // e o Angular re-renderiza o carrossel sem precisar de subscribe() ou pipe().
  filtered = computed(() => {
    return this.products().filter(p =>
      !this.selectedBrand() || p.brand === this.selectedBrand()
    );
  });

  // Setter exposto para permitir que o Sidebar altere a marca.
  setBrand(brand: string | null) {
    this.selectedBrand.set(brand);
  }
}
