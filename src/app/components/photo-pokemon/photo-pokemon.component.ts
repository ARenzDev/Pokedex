import { Component, Input } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon';

@Component({
  selector: 'app-photo-pokemon',
  imports: [],
  templateUrl: './photo-pokemon.component.html',
  styleUrl: './photo-pokemon.component.scss'
})
export class PhotoPokemonComponent {
  @Input() pokemon?:Pokemon
  @Input() src:string | undefined;
  @Input() alt:string | undefined;
}
