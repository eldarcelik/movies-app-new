import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('https://api.themoviedb.org/3/movie/top_rated', () => {
    return HttpResponse.json(topRatedMovies);
  }),

  http.get('https://api.themoviedb.org/3/tv/top_rated', () => {
    return HttpResponse.json(topRatedShows);
  }),

  http.get('https://api.themoviedb.org/3/tv/:id', () => {
    return HttpResponse.json(show);
  }),

  http.get('https://api.themoviedb.org/3/movie/:id', () => {
    return HttpResponse.json(movie);
  }),
];

const movie = {
  id: 8965,
  original_title: "Atlantis: Milo's Return",
  overview:
    'Milo and Kida reunite with their friends to investigate strange occurances around the world that seem to have links to the secrets of Atlantis.',
  poster_path: '/jrZEWzSlbQTlsJobDmzuFNzlxbh.jpg',
  release_date: '2003-02-25',
  title: "Atlantis: Milo's Return",
  video: false,
  vote_average: 6.335,
  videos: {
    results: [
      {
        iso_639_1: 'en',
        iso_3166_1: 'US',
        name: "Atlantis: Milo's Return",
        key: 'IXIQlVsTaYw',
        published_at: '2012-02-23T17:11:44.000Z',
        site: 'YouTube',
        size: 480,
        type: 'Trailer',
        official: true,
        id: '571f3b509251412801000206',
      },
    ],
  },
};

const show = {
  first_air_date: '',
  id: 8998,
  last_air_date: null,
  last_episode_to_air: null,
  name: 'Ultimate Poker Challenge',
  number_of_episodes: 0,
  number_of_seasons: 0,
  original_name: 'Ultimate Poker Challenge',
  overview:
    'The Ultimate Poker Challenge was a series of weekly poker tournaments acting as super-satellites into the series semi-finals.\n\nThe first and second seasons are available on NTSC DVD. In the United States, it was a syndicated program.',
  poster_path: null,
  seasons: [],
  status: 'Ended',
  tagline: '',
  type: 'Scripted',
  vote_average: 0,
  videos: {
    results: [],
  },
};

const topRatedShows = {
  page: 1,
  results: [
    {
      backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
      id: 1396,
      original_name: 'Breaking Bad',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      poster_path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
      first_air_date: '2008-01-20',
      name: 'Breaking Bad',
      vote_average: 8.894,
    },
  ],
  total_pages: 92,
  total_results: 1840,
};

const topRatedMovies = {
  page: 1,
  results: [
    {
      backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
      id: 238,
      original_title: 'The Godfather',
      overview:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      release_date: '1972-03-14',
      title: 'The Godfather',
      video: false,
      vote_average: 8.71,
    },
  ],
  total_pages: 447,
  total_results: 8937,
};
