import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../Product.css";
import getImageUrl from "../Utils/ImageUrl";
import { fetchPokemonDetails } from "../Utils/Api";
// Usedispatch allows access to dispatch function - dispatches the action
// Use selector - select the state from the store
import { useDispatch, useSelector } from "react-redux";
import { SetPokemonDetails } from "../redux/PokemonAction"; // action creator

const ProductDescriptionPage = () => {
  const { name } = useParams();
  // Uses dispatch hook
  const dispatch = useDispatch();
  // it access the PokemonDetails property from store
  const pokemonDetails = useSelector((state) => state.PokemonDetails);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemonDetails(name);
        dispatch(SetPokemonDetails(data));
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [dispatch, name]);
  // if the data is fetched successfully , we dispatch the setPokemonList action-
  // with the data as its payload

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <div className="pokemon-card">
        <div className="pokemon-image">
          <img
            src={getImageUrl(pokemonDetails?.id)}
            className="img-fluid rounded"
            alt={pokemonDetails?.name}
          />
        </div>
        <div className="pokemon-info">
          <h1 className="title">{pokemonDetails?.name}</h1>
          <div className="details">
            <strong>Height:</strong> {pokemonDetails?.height} decimetres
          </div>
          <div className="details">
            <strong>Weight:</strong> {pokemonDetails?.weight} hectograms
          </div>
          <div className="details">
            <strong>Abilities:</strong>
            <ul>
              {pokemonDetails.abilities.map((ability) => (
                <li key={ability.ability.name} className="list-item">
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="details">
            <strong>Forms:</strong>
            <ul>
              {pokemonDetails?.forms.map((form) => (
                <li key={form?.name} className="list-item">
                  {form?.name}
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="back-link">
            <button className="back-button">Back to PLP</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionPage;
