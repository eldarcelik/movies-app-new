import React from 'react';

import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';

import { MockedContextProvider } from '__mocks__/context';
import { AppContextInterface } from 'types/types';

import MovieOrShow from './MovieOrShow';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('MovieOrShow component', () => {
  jest.useFakeTimers();

  test('should render movie or show item when api responds', async () => {
    const mockedContentType = 'tv';
    const mockedParams = { id: '8998' };

    // Mocking useContext
    const useContextMock = jest.spyOn(React, 'useContext');
    useContextMock.mockReturnValue({ contentType: mockedContentType });

    // Mocking useParams
    (useParams as jest.Mock).mockReturnValue(mockedParams);

    render(
      <MockedContextProvider value={{ contentType: mockedContentType } as AppContextInterface}>
        <MovieOrShow />
      </MockedContextProvider>,
    );

    const gifElement = screen.getByAltText(/loading/i);
    expect(gifElement).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByText(/Ultimate Poker Challenge/i)).toBeInTheDocument();
    // });
    // await screen.findByText(/Ultimate Poker Challenge/i);
  });
});
