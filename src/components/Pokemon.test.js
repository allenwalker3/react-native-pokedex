/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Pokemon from './Pokemon';
import { pokemonTestData } from '../../jest/pokemonTestData';

describe('<Pokemon> Component', () => {

  it('renders <Pokemon size="large" pokemon={data}>', () => {
    const tree = renderer.create(<Pokemon pokemon={pokemonTestData} size="large" />).toJSON();
    expect(tree.children.length >= 1).toBe(true);
  });

  it('renders <Pokemon size="small" pokemon={data}>', () => {
    const tree = renderer.create(<Pokemon pokemon={pokemonTestData} size="small" />).toJSON();
    expect(tree.children.length >= 1).toBe(true);
  });

  it('renders empty Pokemmon <Pokemon size="large" pokemon={null}>', () => {
    const tree = renderer.create(<Pokemon pokemon={null} size="large" />).toJSON();
    expect(tree.children).toBe(null);
  });

  it('renders empty Pokemmon <Pokemon size="small" pokemon={null}>', () => {
    const tree = renderer.create(<Pokemon pokemon={null} size="small" />).toJSON();
    expect(tree.children).toBe(null);
  });


});
