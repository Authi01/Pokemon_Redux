import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import "../Product.css";
import getImageUrl from "../Utils/ImageUrl";
import { fetchPokemonList } from "../Utils/Api";
// Usedispatch allows access to dispatch function - dispatches the action
// Use selector - select the state from the store
import { useDispatch, useSelector } from "react-redux";
import { SetPokemonList } from "../redux/PokemonAction"; // action creator

const ProductListingPage = () => {
  // Uses dispatch hook
  const dispatch = useDispatch();
  // it access the PokemonList property from store
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonList();
        dispatch(SetPokemonList(data));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [dispatch]);
  // if the data is fetched successfully , we dispatch the setPokemonList action-
  // with the data as its payload

  return (
    <div className="product-listing1">
      <h1 className="centered1">Pokemon List</h1>
      <div className="pokemon-grid1">
        {pokemonList.map((pokemon, index) => {
          const imageUrl = getImageUrl(index + 1);
          return (
            <PokemonCard key={index} pokemon={pokemon} imageUrl={imageUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
