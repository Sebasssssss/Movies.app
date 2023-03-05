import { apiTypes } from '@/interfaces/movie.d'
import { API_URL, API_KEY } from 'services/settings'
import { Props } from 'interfaces/services.d'

export default async function getMovies({ category, page = 1 }: Props) {
  const apiUrl = `${API_URL}/movie/${category}?api_key=${API_KEY}&page=${page}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie: apiTypes) => {
        const {
          adult,
          id,
          title,
          poster_path,
          release_date,
          vote_average,
          genre_ids
        } = movie
        return {
          adult,
          id,
          title,
          poster_path,
          release_date,
          vote_average,
          genre_ids
        }
      })
      return movies
    })
}
