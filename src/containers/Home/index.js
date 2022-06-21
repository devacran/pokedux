/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import { getPokemons } from "../../api/getPokemons";
import { setPokemons as setPokemonsAction } from "../../actions";
import "./styles.css";

function Home() {
  const pokemonList = useSelector((state) => state.list);
  const dispatch = useDispatch();
  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemonsAction(res.results));
    });
  }, []);

  return (
    <div className="Home">
      <Searcher />
      <PokemonList pokemons={pokemonList} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default Home;
