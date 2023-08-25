import  { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import backgroundImage from '../images/background.jpg'; 

const Detail = () => {
  const [pokemonData, setPokemonData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('../pokemon.json')
      .then(response => response.json())
      .then(data => {
        const selectedPokemon = data.pokemon.find(p => p.num === id);
        setPokemonData(selectedPokemon || {});
      })
      .catch(error => {
        console.error('Error al cargar y analizar los datos JSON:', error);
      });
  }, [id]);

  const capitalizedPokemonName = pokemonData.name ? pokemonData.name.toUpperCase() : '';

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Link to="/">
        <button
        type="button"
        className="border border-gray-700 bg-gray-700 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline"
      >
        Back
      </button>
        </Link>
      <div className="bg-white rounded-lg p-6 shadow-md w-full md:max-w-xl">
          <h1 className="text-3xl font-semibold mb-4 text-center">{capitalizedPokemonName}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img src={pokemonData.img} alt={pokemonData.name} className="w-full max-w-md mx-auto" />
          </div>
          <div>
            <p className="mb-4 text-justify">{pokemonData.about}</p>
            <div className="mb-4">
              <p className="font-semibold">TYPE:</p>
              <ul className="list-disc list-inside">
                {pokemonData.type && pokemonData.type.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold">STATS:</p>
              <p>Attack: {pokemonData.stats?.['base-attack']}</p>
              <p>Defense: {pokemonData.stats?.['base-defense']}</p>
              <p>Stamina: {pokemonData.stats?.['base-stamina']}</p>
              <p>Max CP: {pokemonData.stats?.['max-cp']}</p>
              <p>Max HP: {pokemonData.stats?.['max-hp']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
