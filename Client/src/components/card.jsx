import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch('./pokemon.json')
      .then(response => response.json())
      .then(data => {
        setPokemonData(data.pokemon);
      })
      .catch(error => {
        console.error('Error al cargar y analizar los datos JSON:', error);
      });
  }, []);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePokemon = pokemonData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(pokemonData.length / itemsPerPage);

  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-center mt-8 py-12">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`mr-2 px-4 py-2 rounded-md ${
            currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'
          }`}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`ml-2 px-4 py-2 rounded-md ${
            currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'
          }`}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePokemon.map(pokemon => (
    <Link key={pokemon.num} to={`/detail/${pokemon.num}`}>

<div key={pokemon.num} className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center hover:transform hover:scale-105 hover:bg-yellow-400 hover:text-white transition duration-300">
  <div>
    <img className="object-center object-cover h-auto w-full" src={pokemon.img} alt={pokemon.name} />
  </div>
  <div className="text-center py-8 sm:py-6">
    <p className="text-xl text-gray-700 font-bold mb-2">{pokemon.name}</p>
    <p className="text-base text-gray-400 font-normal">{pokemon['pokemon-rarity']}</p>
  </div>
</div>

            </Link>

        ))}
      </div>
    </div>
  );
};

export default Card;

