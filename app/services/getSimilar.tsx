import { API_URL, API_KEY } from './settings'
import { apiTypes } from 'interfaces/movie'

export default async function getSimilarMovie({ id }) {
  const apiUrl = `${API_URL}/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie): apiTypes => {
        const { id, runtime, title, poster_path, release_date, popularity } =
          movie
        return {
          id,
          title,
          runtime,
          poster_path,
          release_date,
          popularity
        }
      })
      return movies
    })
}