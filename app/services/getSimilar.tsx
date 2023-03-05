import { API_URL, API_KEY } from 'services/settings'
import { apiTypes } from 'interfaces/movie.d'
import { Props } from 'interfaces/services.d'

export default async function getSimilarMovie({ category, id }: Props) {
  const apiUrl = `${API_URL}/${category}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`

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
