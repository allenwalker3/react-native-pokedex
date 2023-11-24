/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Pokemon from './Pokemon';
import { pokemonTestData } from '../../jest/pokemonTestData';
describe('Components', () => {

  it('<Pokemon size="large">', () => {
    const tree = renderer.create(<Pokemon pokemon={pokemonTestData} size="large" />).toJSON();
    expect(tree.children.length).toBe(5);
  });

  it('<Pokemon size="small">', () => {
    const tree = renderer.create(<Pokemon pokemon={pokemonTestData} size="small" />).toJSON();
    expect(tree.children.length).toBe(2);
  });

});
