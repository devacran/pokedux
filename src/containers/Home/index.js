/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Searcher from "../../components/Searcher";
import PokemonList from "../../components/PokemonList";
import { getPokemons } from "../../api/getPokemons";
import Counter from "../../components/Counter";
import {
  setPokemons as setPokemonsAction,
  getPokemonsWithDetails,
  increaseCounter as increaseCounterAction,
  decreaseCounter as decreaseCounterAction,
  increaseCounterAsync as increaseCounterAsyncAction,
} from "../../actions";
import "./styles.css";

function Home() {
  const pokemonList = useSelector((state) => state.list);
  const counterValue = useSelector((state) => state.counter);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsWithDetails());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="Home">
      <Searcher />
      <Counter
        value={counterValue}
        onIncrement={() => dispatch(increaseCounterAction())}
        onDecrement={() => dispatch(decreaseCounterAction())}
        onIncrementAsync={() => dispatch(increaseCounterAsyncAction())}
      />
      <PokemonList pokemons={pokemonList} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default Home;
