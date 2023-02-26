import { API_URL, API_KEY } from './settings'

export default async function searchMovies({ keyword }) {
  const apiUrl = `${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=true&query=${keyword}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map(movie => {
        const { id, runtime, title, poster_path, release_date, vote_average } =
          movie
        return {
          id,
          title,
          runtime,
          poster_path,
          release_date,
          vote_average
        }
      })
      return movies
    })
}
