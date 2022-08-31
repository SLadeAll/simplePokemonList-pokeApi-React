import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=40&offset=0";
  const [pokemon, setPokemon] = useState([]);

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setPokemon(responseJSON.results);
  };

  useEffect(() => {
    fetchApi();
  }, []);
  console.log(pokemon);
  return (
    <div className="App">
      <ul>
        {pokemon.map((pokemons) => {
          return <li key={pokemons.name}> {pokemons.name} </li>;
        })}
      </ul>
    </div>
  );
}
