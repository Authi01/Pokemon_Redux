// action creators - They create the actions in the reducer
export const SetPokemonList = (PokemonList) => ({
  type: "SET_PokemonList",
  payload: PokemonList, // contains the actual data to be set in the state
});

export const SetPokemonDetails = (PokemonDetails) => ({
  type: "SET_PokemonDetails",
  payload: PokemonDetails,
});
