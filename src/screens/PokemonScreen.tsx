import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import Pokemon from '../components/Pokemon';

const PokemonScreen: React.FC = (): JSX.Element => {
  const pokemon = useSelector(state => state.pokedex.pokemon);

  //console.log(pokemon);
  return (
    <ScrollView style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}>
      <Pokemon size='large' pokemon={pokemon} />
    </ScrollView>
  );
};

export default PokemonScreen;

const styles = StyleSheet.create({

  scrollView: {
    height: '20%',
    width: '90%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'beige'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50
  },
});