/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons } from '../../actions';
import './styles.css';

function Home() {
  const pokemons = Array(20).fill();
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons().then((res) => {
      dispatch(setPokemons(res.results));
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default Home;
