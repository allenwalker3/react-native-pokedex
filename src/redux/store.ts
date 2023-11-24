import { configureStore } from '@reduxjs/toolkit';
import pokedexReducer from './pokedexSlice';

export const store = configureStore({
  reducer: {
    pokedex: pokedexReducer
  }
});