import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { capitalize } from '../util/utils';
type Props = {
  size: 'large' | 'small',
  pokemon: any
}

const Pokemon: React.FC<Props> = ({ size, pokemon }): JSX.Element => {
  if (size === 'large' && pokemon) {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.mainText}>{capitalize(pokemon.name)}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.sprites}>
            <Image style={styles.image}
              source={{ uri: pokemon.sprites.front_default }}
            />
            <Image style={styles.image}
              source={{ uri: pokemon.sprites.front_shiny }}
            />
            <Image style={styles.image}
              source={{ uri: pokemon.sprites.back_default }}
            />
            <Image style={styles.image}
              source={{ uri: pokemon.sprites.back_shiny }}
            />
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.mainText}>Abilities:</Text>
          <Text style={styles.detailText}>
            {pokemon.abilities.map(a => a.ability.name).join(', ')}
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.mainText}>Moves:</Text>
          <Text style={styles.detailText}>
            {pokemon.moves.map(m => m.move.name).join(', ')}
          </Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.mainText}>Types:</Text>
          <Text style={styles.detailText}>
            {pokemon.types.map(t => t.type.name).join(', ')}
          </Text>
        </View>
      </View>
    );
  }
  else if (size === 'small' && pokemon) {
    return (
      <View style={styles.smallContainer}>
        <View style={styles.container}>
          <Text style={styles.mainText}>{capitalize(pokemon.name)}</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.sprites}>
            <Image style={styles.image}
              source={{ uri: pokemon.sprites.front_default }}
            />
          </View>
        </View>
      </View>
    );
  }

  else return <div></div>;
};

export default Pokemon;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallContainer: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'darkGray',
    backgroundColor: 'beige',
    padding: 5,
    margin: 10
  },
  image: {
    width: 80,
    height: 80
  },
  sprites: {
    flexDirection: 'row'
  },
  mainText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  detailText: {
    fontSize: 14
  }
});