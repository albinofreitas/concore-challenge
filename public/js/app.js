import { html, render } from "https://unpkg.com/lit-html?module";
import { pokemonBlock } from "./pokemon.js";

fetch("https://orgnova.concore.io/pokemon/")
  .then(res => res.json())
  .then(renderPokemons)
  .catch(console.log)

function renderPokemons(pokemons) {
  render(
    pokemons.map(pokemonBlock),
    document.getElementById("pokemon-list")
  )
}

