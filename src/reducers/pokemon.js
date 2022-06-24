import {
  SET_LOADING,
  SET_POKEMONS,
  INCREASE_COUNTER_ASYNC,
  INCREASE_COUNTER,
} from "../actions/types";
const initialState = {
  list: [],
  loading: false,
  counter: 0,
};

export const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 1 };
    case SET_POKEMONS:
      return { ...state, list: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
