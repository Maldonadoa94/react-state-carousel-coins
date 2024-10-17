import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

// Smoke Test
test('Card component renders without crashing', () => {
  render(<Card />);
});

// Snapshot Test
test('Card component matches the snapshot', () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot();
});