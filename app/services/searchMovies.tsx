import { apiTypes } from '@/interfaces/movie.d'
import { API_URL, API_KEY } from './settings'
import { Props } from 'interfaces/services.d'

export default async function searchMovies({ keyword, page }: Props) {
  const apiUrl = `${API_URL}/search/multi?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=true&query=${keyword}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie: apiTypes) => {
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
