import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // middleware for asynchronous actions
import PokemonReducer from "./PokemonReducer";

const store = createStore(PokemonReducer, applyMiddleware(thunk));
export default store;
