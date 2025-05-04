import "./Pokemon.css";
import { useState, useEffect } from "react";

export const HowNotToFetchApi = () => {
  // const [pokemon, setpokemon] = useState([]);
  const [pokemon, setpokemon] = useState(null);
  //   without using useEffeect  fetch run infinite loop becasue of usestate

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    fetch("http://pokeapi.co/api/v2/pokemon/pikachu") // it will give object not an array
      .then((res) => res.json())
      .then((data) => {
        setpokemon(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!pokemon) {
    return (
      <div>
        <h1>Loading........</h1>
      </div>
    );
  }

  // when we will get data then render this component

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
