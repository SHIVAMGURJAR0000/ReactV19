import "./Pokemon.css";
import { useState, useEffect } from "react";

export const HowNotToFetchApi = () => {
  const [pokemon, setpokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const fetchPokemon = () => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   fetch("http://pokeapi.co/api/v2/pokemon/pikachu") // it will give object not an array
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setpokemon(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error);
  //       setLoading(false);
  //     });
  // };

  //using async await

  const fetchPokemon = async () => {
    try {
      const res = await fetch("http://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await res.json();
      setpokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
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
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};
