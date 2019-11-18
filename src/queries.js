import gql from "graphql-tag";

export const HOME_PAGE = gql`
  {
    movies(limit: 50, rating: 7) {
      id
      title
      rating
      medium_cover_image
      genres
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovieDetail($movieId: Int!) {
    movie(id: $movieId) {
      title
      rating
      description_intro
      language
      medium_cover_image
      genres
    }
    suggestions(id: $movieId) {
      title
      description_intro
      medium_cover_image
    }
  }
`;
// line 16: query getMovieDetail() => for apollo
// line 17: movie() => for graphql server
