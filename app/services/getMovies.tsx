import { apiTypes } from '@/interfaces/movie'
import { API_URL, API_KEY } from './settings'

export default async function getMovies({ category }) {
  const apiUrl = `${API_URL}/movie/${category}?api_key=${API_KEY}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map(movie => {
        const {
          adult,
          id,
          title,
          poster_path,
          release_date,
          popularity,
          genres
        }: apiTypes = movie
        return {
          adult,
          id,
          title,
          poster_path,
          release_date,
          popularity,
          genres
        }
      })
      return movies
    })
}
