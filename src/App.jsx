import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();

        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPokemons();
  }, []);
  console.log(pokemons);
  return (
    <div className="container">
      <h1>Pokemons</h1>
      <div className="box">
        {pokemons.map((pokemon) => (
          <div key={pokemon.name}>
            <div className="cart">
              <h2>{pokemon.name}</h2>
              <img src={pokemon.url} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
