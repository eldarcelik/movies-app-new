export function calculateAverageVote(vote: number): number {
  return Math.round(vote * 10) / 10;
}
