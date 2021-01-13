import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Button = () => {
  const [result, setResult] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();

    // bring in Pokemon API, use FETCH
    fetch('https://pokeapi.co/api/v2/pokemon?limit=801')
    .then(response => response.json())
    .then(response => setResult(response.results))

    // use pokemon API, utilizing AXIOS
    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=801')
    //   .then(response => setResult(response.data.results))

  }

  return(
    <div>
      <button onClick={handleClick}>What are their names? </button>
      {
        result !== null ? (
          result.map((pokemon, i) => (
            <p className="name" key={i}> {pokemon.name}</p>
          ))
        ) : null
      }

    </div>
  );
};

export default Button;