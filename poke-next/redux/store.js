import { configureStore } from "@reduxjs/toolkit";
import legendReducer from "./legend"
import evosReducer from "./evos"
import pokemonReducer from "./pokemon"



export default configureStore({
    reducer: {
      legend: legendReducer,
      evos: evosReducer,
      pokemon: pokemonReducer,
    },
  });
  