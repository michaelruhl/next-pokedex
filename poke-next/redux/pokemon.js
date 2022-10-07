import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: '',
    
  },
  reducers: {
    onPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
}
});

// Action creators are generated for each case reducer function
export const { onPokemon} =
  pokemonSlice.actions;

export default pokemonSlice.reducer;