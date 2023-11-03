import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

test('renders image alt content', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
