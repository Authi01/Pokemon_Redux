import React, { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import getImageUrl from "../Utils/ImageUrl";
import { fetchPokemonList } from "../Utils/Api";
import { useDispatch, useSelector } from "react-redux";
import { SetPokemonList } from "../redux/PokemonAction";

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.PokemonList);

  useEffect(() => {
    // Checks if the pokemonlist is already available in  Redux store
    if (!pokemonList || pokemonList.length === 0) {
      const fetchData = async () => {
        try {
          const data = await fetchPokemonList();
          dispatch(SetPokemonList(data));
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };

      fetchData();
    }
  }, []);

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
