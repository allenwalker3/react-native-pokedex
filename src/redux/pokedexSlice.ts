import { createSlice } from '@reduxjs/toolkit';
import uniqBy from 'lodash/uniqBy';

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: { 
    history: [], 
    pokemon: {} 
  },
  reducers: {
    pokedexAdd(state, action) {
      state.history = uniqBy(state.history.concat(action.payload), 'id');
    },
    setPokemon(state, action) {
      state.pokemon = action.payload;  
    }
  }
});
  
export const { pokedexAdd, setPokemon } = pokedexSlice.actions;
export default pokedexSlice.reducer;