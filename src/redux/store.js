import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // middleware for asynchronous actions
import PokemonReducer from "./PokemonReducer";

// const store = createStore(PokemonReducer, applyMiddleware(thunk)); //sets up the store and initial state
const store = createStore(PokemonReducer);
export default store;
