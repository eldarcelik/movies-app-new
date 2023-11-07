import calculateAverageVote from './calculateAverageVote';

describe('calculateAverageVote', () => {
  test('calculate average vote helper', () => {
    const actual = calculateAverageVote(5.26);
    const expected = 5.3;

    expect(actual).toEqual(expected);
  });
});
