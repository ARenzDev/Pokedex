import { Component } from '@angular/core';
import { PhotoPokemonComponent } from "../../components/photo-pokemon/photo-pokemon.component";
import { CardPokemonComponent } from "../../components/card-pokemon/card-pokemon.component";

@Component({
  selector: 'app-home',
  imports: [PhotoPokemonComponent, CardPokemonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
