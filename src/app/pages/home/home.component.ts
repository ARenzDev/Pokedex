import {
  Component,
  OnInit,
  NgModule,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoPokemonComponent } from '../../components/photo-pokemon/photo-pokemon.component';
import { CardPokemonComponent } from '../../components/card-pokemon/card-pokemon.component';
import { PokemonService } from '../../services/pokemon.service';
import { Result } from '../../interfaces/pokeApi';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-home',
  imports: [PhotoPokemonComponent, CardPokemonComponent, CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  @ViewChild('cardsElement') cardsElement!: ElementRef;
  pokemonList: Result[] = [];
  pagina: number = 1;
  cargando: boolean = false;
  pokemonSeleccionado?: Pokemon;
  aperturaDetalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
  }

  async cargarLista() {
    this.pokemonList = [
      ...this.pokemonList,
      ...(await this.pokemonService.getByPage(this.pagina)),
    ];
    this.pagina++;
    this.cargando = false;
  }
  onScroll(event: Event) {
    const el = this.cardsElement.nativeElement;
    const threshold = el.clientHeight + el.scrollTop;
    const height = el.scrollHeight;

    // cuando llegas al fondo
    if (Math.round(threshold) >= height) {
      this.cargarLista();
    }
  }

  tarjetaClickeada(e: Pokemon) {
    console.log(e);
    if (this.pokemonSeleccionado?.name === e.name)
      return (this.aperturaDetalle = !this.aperturaDetalle);
    return (this.pokemonSeleccionado = e);
  }
}
