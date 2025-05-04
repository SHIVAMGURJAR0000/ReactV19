import "./Pokemon.css";
import { useState, useEffect } from "react";

export const HowNotToFetchApi = () => {
  const [pokemon, setpokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("http://pokeapi.co/api/v2/pokemon/pikachu") // it will give object not an array
      .then((res) => res.json())
      .then((data) => {
        setpokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return (
    // <div className="container effect-container">
    //   <ul>
    //     Data:
    //     {/* {pokemon.map((currData) => {
    //       return <li key={currData.id}>{currData.title}</li>;
    //     })} */}
    //   </ul>
    // </div>

    <section className="container">
      <header>Lets Catch Pokemon</header>

      <ul className="class-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
        </li>
      </ul>
    </section>
  );
};
