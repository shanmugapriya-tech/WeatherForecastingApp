import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByTestId } = render(
    <App />
);
const input = getByTestId("App");
expect(input).toBeTruthy();
});
