const initialState = {
  PokemonList: [],
  PokemonDetails: null,
}; // Sets the initial state of the pokemon data

// reducer fn : takes two arguments : state (ie) current state ( which is set to initial state by default ) and action
// action - what to do when a action a dispatched
const PokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONLIST":
      return { ...state, PokemonList: action.payload }; // when the action type is Set pokemon list : it creates a new state object with the PokemonList property updated ( Details remains the same ) to the action.payload. The action.payload is typically the new data that you want to set in the state.
    case "SET_POKEMONDETAILS":
      return { ...state, PokemonDetails: action.payload };
    default:
      return state;
  }
};

export default PokemonReducer;
