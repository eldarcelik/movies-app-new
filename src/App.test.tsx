import React from 'react';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  test('should render image alt content', async () => {
    render(<App />);
    const gifElement = screen.getByAltText(/loading/i);
    expect(gifElement).toBeInTheDocument();

    // await act(async () => {
    //   await waitFor(() => {
    //     screen.getByText(/breaking bad/i);
    //   });
    // });

    // const dataElement = screen.getByText(/breaking bad/i);
    // expect(dataElement).toBeInTheDocument();
  });
});
