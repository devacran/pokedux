import { SET_POKEMONS, SET_LOADING } from "./types";
import { getPokemons } from "../api/getPokemons";

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonsWithDetails = () => (dispatch, getState) => {
  dispatch(setLoading(true));
  getPokemons().then((res) => {
    console.log(res.results);
    dispatch(setPokemons(res.results));
    dispatch(setLoading(false));
  });
};
