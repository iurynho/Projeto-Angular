import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-carousel',
  standalone: true,

  // O componente não depende de módulos; tudo é declarado via imports.
  imports: [CommonModule, CardsComponent],

  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],

  // Necessário quando utilizamos Web Components no Angular (ex: <swiper-container/>).
  // Isso evita que o Angular bloqueie a renderização por não reconhecer a tag.
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent  {

  // O serviço é injetado via 'inject()' ao invés do construtor, um padrão mais moderno.
  // Este serviço contém:
  //  - o estado da marca selecionada
  //  - a lista de produtos
  //  - um computed() que filtra os produtos por marca
  // O carrossel consome apenas o estado exposto pelo service,
  // mantendo o fluxo de dados unidirecional: Sidebar -> Service -> Carousel.
  service = inject(ProductsService);
}
