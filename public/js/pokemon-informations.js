import { render } from "https://unpkg.com/lit-html?module";
import { pokemonModal } from "./pokemon-modal.js";

export const getPokemonInformations = (pokedex_entry) => {
    fetch("https://orgnova.concore.io/pokemon/"+pokedex_entry)
    .then(res => res.json())
    .then(renderPokemonInformations)
    .catch(console.log)
  }
  
function renderPokemonInformations(pokemon){
    render(
        pokemonModal(pokemon),
        document.getElementById("pokemon-informations")
    )

    $("#pokemon-modal").modal()
}