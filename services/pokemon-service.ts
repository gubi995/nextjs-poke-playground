import fetch from 'isomorphic-unfetch';

import { SERVER_API_URL } from '../pages/constants';
import Pokemon from '../models/pokemon';

class PokemonService {
  static async getFavoritePokemon(): Promise<Pokemon> {
    const response = await fetch(`${SERVER_API_URL}/favorite`);

    if (!response.ok) {
      return null;
    }

    const { payload } = await response.json();

    return payload;
  }

  static async saveFavoritePokemon(pokemon: Pokemon): Promise<boolean> {
    const response = await fetch(`${SERVER_API_URL}/favorite`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'post',
      body: JSON.stringify({ ...pokemon, favorite: true }),
    });

    return response.ok;
  }

  static async fetchPokemons(url: string): Promise<{ pokemons: Pokemon[]; nextPageUrl: string }> {
    const [response, favoritePokemon] = await Promise.all([fetch(url), PokemonService.getFavoritePokemon()]);
    const { results: pokemons, next } = await response.json();

    const favoritePokemonName = favoritePokemon?.name;

    const pokemonsWithFavorite = pokemons.map((pokemon) => ({
      favorite: favoritePokemonName === pokemon.name,
      ...pokemon,
    }));

    return { pokemons: pokemonsWithFavorite, nextPageUrl: next };
  }
}

export default PokemonService;
