import { apiTypes } from '@/interfaces/movie.d'
import { API_URL, API_KEY } from './settings'

export default async function getDiscover({ category, sort, page = 1 }) {
  const apiUrl = `${API_URL}/discover/${category}?api_key=${API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`

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
          vote_average,
          genre_ids
        }: apiTypes = movie
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
