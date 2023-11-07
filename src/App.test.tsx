import React from 'react';

import { render, screen } from '@testing-library/react';

import { fetchData } from 'apis/fetchData';

import App from './App';

jest.mock('apis/fetchData');

describe('App component', () => {
  beforeEach(() => jest.clearAllMocks());

  test('should render image alt content', async () => {
    (fetchData as jest.Mock).mockResolvedValue({
      results: [{ name: 'spiderman' }],
    });
    render(<App />);
    const gifElement = screen.getByAltText(/loading/i);

    expect(gifElement).toBeInTheDocument();
  });
});
