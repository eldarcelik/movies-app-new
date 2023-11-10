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
  adult: false,
  backdrop_path: '/GDTwA5FBvVUOjCGKoNDMflbs3Z.jpg',
  belongs_to_collection: {
    id: 100965,
    name: 'Atlantis Collection',
    poster_path: '/8Dx5iuGhol3eqVUzLK9CQEWj7G4.jpg',
    backdrop_path: '/vJOfi2m9yaQGu7LPRcBL44KDU7r.jpg',
  },
  budget: 0,
  genres: [
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 28,
      name: 'Action',
    },
  ],
  homepage: 'http://disneydvd.disney.go.com/atlantis-milos-return.html',
  id: 8965,
  imdb_id: 'tt0344864',
  original_language: 'en',
  original_title: "Atlantis: Milo's Return",
  overview:
    'Milo and Kida reunite with their friends to investigate strange occurances around the world that seem to have links to the secrets of Atlantis.',
  popularity: 23.746,
  poster_path: '/jrZEWzSlbQTlsJobDmzuFNzlxbh.jpg',
  production_companies: [
    {
      id: 3475,
      logo_path: '/jTPNzDEn7eHmp3nEXEEtkHm6jLg.png',
      name: 'Disney Television Animation',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2003-02-25',
  revenue: 0,
  runtime: 80,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Released',
  tagline: 'The all-new adventures',
  title: "Atlantis: Milo's Return",
  video: false,
  vote_average: 6.335,
  vote_count: 3734,
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
  adult: false,
  backdrop_path: null,
  created_by: [],
  episode_run_time: [],
  first_air_date: '',
  genres: [],
  homepage: '',
  id: 8998,
  in_production: false,
  languages: [],
  last_air_date: null,
  last_episode_to_air: null,
  name: 'Ultimate Poker Challenge',
  next_episode_to_air: null,
  networks: [],
  number_of_episodes: 0,
  number_of_seasons: 0,
  origin_country: [],
  original_language: 'en',
  original_name: 'Ultimate Poker Challenge',
  overview:
    'The Ultimate Poker Challenge was a series of weekly poker tournaments acting as super-satellites into the series semi-finals.\n\nThe first and second seasons are available on NTSC DVD. In the United States, it was a syndicated program.',
  popularity: 0.6,
  poster_path: null,
  production_companies: [],
  production_countries: [],
  seasons: [],
  spoken_languages: [],
  status: 'Ended',
  tagline: '',
  type: 'Scripted',
  vote_average: 0,
  vote_count: 0,
  videos: {
    results: [],
  },
};

const topRatedShows = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg',
      genre_ids: [18, 80],
      id: 1396,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Breaking Bad',
      overview:
        "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
      popularity: 441.461,
      poster_path: '/3xnWaLQjelJDDF7LT1WBo6f4BRe.jpg',
      first_air_date: '2008-01-20',
      name: 'Breaking Bad',
      vote_average: 8.894,
      vote_count: 12601,
    },
    {
      adult: false,
      backdrop_path: '/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg',
      genre_ids: [16, 18, 10765, 10759],
      id: 94605,
      origin_country: ['US'],
      original_language: 'en',
      original_name: 'Arcane',
      overview:
        'Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.',
      popularity: 84.528,
      poster_path: '/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg',
      first_air_date: '2021-11-06',
      name: 'Arcane',
      vote_average: 8.74,
      vote_count: 3401,
    },
  ],
  total_pages: 92,
  total_results: 1840,
};

const topRatedMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/tmU7GeKVybMWFButWEGl2M4GeiP.jpg',
      genre_ids: [18, 80],
      id: 238,
      original_language: 'en',
      original_title: 'The Godfather',
      overview:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
      popularity: 147.777,
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      release_date: '1972-03-14',
      title: 'The Godfather',
      video: false,
      vote_average: 8.71,
      vote_count: 18908,
    },
    {
      adult: false,
      backdrop_path: '/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg',
      genre_ids: [18, 80],
      id: 278,
      original_language: 'en',
      original_title: 'The Shawshank Redemption',
      overview:
        'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
      popularity: 112.033,
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      release_date: '1994-09-23',
      title: 'The Shawshank Redemption',
      video: false,
      vote_average: 8.704,
      vote_count: 24884,
    },
  ],
  total_pages: 447,
  total_results: 8937,
};
