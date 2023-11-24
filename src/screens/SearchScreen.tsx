import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { fetchPokemonByName } from '../util/Api';
import { useDispatch } from 'react-redux';
import { pokedexAdd, setPokemon } from '../redux/pokedexSlice';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


type SearchScreenParamList = {
  Search: undefined;
}

const SearchScreen = ({ navigation }: BottomTabScreenProps<SearchScreenParamList, 'Search'>): JSX.Element => {

  const [searchText, setSearchText] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();

  const findAndSetPokemonIntoState = async (name: string) => {
    try {
      const pokemon = await fetchPokemonByName(name);
      dispatch(setPokemon(pokemon));
      dispatch(pokedexAdd(pokemon));
      setSearchText('');
      navigation.navigate('Pokemon');
    } catch (err: any) {
      setError(err.message);
      setSearchText('');
    }
  };


  return (
    <View style={styles.container}>
      {error && (
        <Text style={styles.error}>{error}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Enter Pokemon Name or Number"
        onChangeText={text => setSearchText(text)}
        value={searchText}
        inputMode="text"
      />
      <View style={styles.button}>
        <Button title="Search" onPress={() => findAndSetPokemonIntoState(searchText)} />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 10
  },
  error: {
    textAlign: 'center',
    fontFamily: 'OpenSans_600SemiBold',
    color: 'red',
    margin: 8
  }
});