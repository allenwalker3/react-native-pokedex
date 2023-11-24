import React from 'react';
import { ScrollView, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import Pokemon from '../components/Pokemon';
import { useDispatch } from 'react-redux';
import { setPokemon } from '../redux/pokedexSlice';

type PokedexScreenParamList = {
  Pokedex: undefined;
}

const PokedexScreen = ({ navigation }: BottomTabScreenProps<PokedexScreenParamList, 'Pokedex'>): JSX.Element => {
  const history = useSelector(state => state.pokedex.history);
  const dispatch = useDispatch();

  const selectPokemon = (pokemon: any) => {
    dispatch(setPokemon(pokemon));
    navigation.navigate('Pokemon');
  };

  return (
    <ScrollView style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      {history.map((pokemon, index) =>
        <Pressable key={index} onPress={() => selectPokemon(pokemon)}>
          <Pokemon key={index} size="small" pokemon={pokemon} />
        </Pressable>
      )}
    </ScrollView>
  );
};
export default PokedexScreen;

const styles = StyleSheet.create({
  scrollView: {
    height: '20%',
    width: '90%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black'
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
});