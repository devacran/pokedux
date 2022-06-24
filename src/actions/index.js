import {
  SET_POKEMONS,
  SET_LOADING,
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_COUNTER_ASYNC,
} from "./types";
import { getPokemons } from "../api/getPokemons";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
});
export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
});
export const increaseCounterAsync = () => ({
  type: INCREASE_COUNTER_ASYNC,
});

export const getPokemonsWithDetails = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  getPokemons().then((res) => {
    console.log(res.results);
    dispatch(setPokemons(res.results));
    dispatch(setLoading(false));
  });
};
