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
    /*
      pokedexToggled(state, action) {
        const todo = state.find(todo => todo.id === action.payload)
        todo.completed = !todo.completed
      }
      */
  }
});
  
export const { pokedexAdd, setPokemon } = pokedexSlice.actions;
export default pokedexSlice.reducer;