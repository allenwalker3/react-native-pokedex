import Pokedex from 'pokedex-promise-v2';

export const fetchPokemonByName = async (name: string) => {
  const P = new Pokedex();
  try {
    const pokemon = await P.getPokemonByName(name.toLowerCase());
    return pokemon;
  } catch (error: any) {
    if (error.response.status === 404) {
      throw new Error(`Pokemon "${name}" not found, please try another name or number`);
    }
    else { 
      throw new Error(error.message);
    }
  }
};