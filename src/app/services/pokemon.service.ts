import { Injectable } from '@angular/core';
import { Result } from '../interfaces/pokeApi';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  async getByPage(page: number, size: number = 40): Promise<Result[]> {
    const offset = (page - 1) * size;
    if (offset > 300) return [];
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`
    );
    const resJson = await res.json();
    return resJson.results;
  }

  async getById(id: string | number): Promise<Pokemon> {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await res.json();
  }

  getByDescription() {}
}
