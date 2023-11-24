
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from '../screens/SearchScreen';
import PokedexScreen from '../screens/PokedexScreen';
import PokemonScreen from '../screens/PokemonScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Search: undefined,
  Pokemon: undefined,
  History: undefined
}

const BottomTabs = createBottomTabNavigator<RootTabParamList>();

const AppNavigator: React.FC = (): JSX.Element => (
  <NavigationContainer>

    <BottomTabs.Navigator
      initialRouteName="Search"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        // tabBarItemStyle: { width: 200 }
      }}>
      <BottomTabs.Screen name="Search" component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen name="Pokemon" component={PokemonScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokemon-go" color={color} size={size} />
          ),
        }}
      />
      <BottomTabs.Screen name="History" component={PokedexScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }} />
    </BottomTabs.Navigator>

  </NavigationContainer>


);

export default AppNavigator;