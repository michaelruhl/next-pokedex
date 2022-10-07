import { configureStore } from "@reduxjs/toolkit";
import legendReducer from "./legend"
import evosReducer from "./evos"
import pokemonReducer from "./pokemon"
import speechReducer from "./speech"
import msgReducer from "./msg"



export default configureStore({
    reducer: {
      legend: legendReducer,
      evos: evosReducer,
      pokemon: pokemonReducer,
      speech: speechReducer,
      msg: msgReducer
    },
  });
  