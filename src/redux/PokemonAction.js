// action creators - They create the actions in the reducer
export const SetPokemonList = (PokemonList) => ({
  type: "SET_POKEMONLIST",
  payload: PokemonList, // contains the actual data to be set in the state
});

export const SetPokemonDetails = (PokemonDetails) => ({
  type: "SET_POKEMONDETAILS",
  payload: PokemonDetails,
});
