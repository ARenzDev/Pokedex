import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from '../../services/pokemon.service';
import { Result } from '../../interfaces/pokeApi';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-card-pokemon',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss',
})
export class CardPokemonComponent implements OnChanges {
  constructor(private pokemon: PokemonService) {}

  ngOnChanges(): void {
    this.extraerDatos();
  }
  @Input() fullData: Pokemon | undefined;
  @Input() data?: Result;
  @Input() seleccionado: boolean = false;
  @Output() clicked = new EventEmitter<Pokemon>();
  id: string = '0';

  selected() {
    if (this.fullData) this.clicked.next(this.fullData);
  }

  extraerDatos() {
    if (this.data && !this.fullData) {
      this.id = this.data.url.substring(34, this.data.url.length - 1);
      this.pokemon.getById(this.id).then((res) => (this.fullData = res));
      return;
    }
    if (this.fullData) {
      this.id = this.fullData.species.url.substring(
        42,
        this.fullData.species.url.length - 1
      );
      this.data = { name: this.fullData.species.name, url: '' };
    }
  }
}
