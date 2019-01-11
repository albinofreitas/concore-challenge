import { html } from "https://unpkg.com/lit-html?module";

export const pokemonModal = (pokemon) => html`
    <div class="modal-header ${pokemon.types[0]}">
        <h5 class="modal-title">${pokemon.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-4"><img src="${pokemon.sprites.front_default}"></img></div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-9">
                            ${pokemon.types.map(type => 
                                html`<span class="pokemon-type ${type}">${type}</span>`
                            )}
                        </div>
                        <div class="pokemon-id col-3">
                            <span>#${pokemon.id}</span>
                        </div>
                    </div>

                    <h5>Basic Informations</h5>
                    <div class="row">
                        <div class="col-5">Experience</div>
                        <div class="col-5">${pokemon.base_experience} xp</div>
                    </div>
                    <div class="row">
                        <div class="col-5">Weight</div>
                        <div class="col-5">${pokemon.weight} cm</div>
                    </div>
                    <div class="row">
                        <div class="col-5">Height</div>
                        <div class="col-5">${pokemon.height} kg</div>
                    </div>
                </div>
            </div>

            <div class="row">
                <h5 class="${pokemon.types[0]}" id="abilities">Abilities</h5>
                <div>
                    ${pokemon.abilities.map(ability => html`
                        <div>
                            <details open="open">
                                <summary><b>${ability.name}</b></summary>
                                <div class="row">
                                    <div class="col-3">Description:</div>
                                    <div class="col-9"><p>${ability.text}</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-3">Effect:</div>
                                    <div class="col-9"><p>${ability.effect}</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-3">Short Effect:</div>
                                    <div class="col-9"><p>${ability.short_effect}</p></div>
                                </div>
                            </details>
                        </div>
                    `)}
                </div>
            </div>

            <div class="row">
                <h5 class="${pokemon.types[0]}" id="moves">Moves</h5>
                <div id="div-moves">
                    ${pokemon.moves.map(move => html`
                        <div>
                            <details>
                                <summary><b>${move.name}</b></summary>
                                <div class="row">
                                    <div class="col-6">Class: ${move.damage_class}</div>
                                    <div class="col-6">Acc: ${move.accuracy}</div>
                                </div>
                                <div class="row">
                                    <div class="col-3">Description:</div>
                                    <div class="col-9"><p>${move.flavor_test}</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-3">Effect:</div>
                                    <div class="col-9"><p>${move.effect_entries}</p></div>
                                </div>
                                <div class="row">
                                    <div class="col-3">Short Effect:</div>
                                    <div class="col-9"><p>${move.short_effect_entries}</p></div>
                                </div>
                            </details>
                        </div>
                    `)}
                </div>
            </div>
        </div>
    </div>
`;