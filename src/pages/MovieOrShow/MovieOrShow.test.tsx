import React from 'react';

import { render, screen } from '@testing-library/react';

import MovieOrShow from './MovieOrShow';

describe('MovieOrShow component', () => {
  test('should render movie or show item when api responds', async () => {
    render(<MovieOrShow />);
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
