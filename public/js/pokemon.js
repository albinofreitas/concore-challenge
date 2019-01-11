import { html } from "https://unpkg.com/lit-html?module";
import { getPokemonInformations } from "./pokemon-informations.js";

export const pokemonBlock = ({ id, pokedex_entry }) => html`
  <div class="pokemon_block" @click=${(e) => getPokemonInformations(pokedex_entry)}>
    <div class="text-center">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedex_entry}.png">
    <h5>${id}</h5>
    </div>
  </div>
`;