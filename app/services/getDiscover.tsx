import { apiTypes } from '@/interfaces/movie'
import { API_URL, API_KEY } from './settings'

export default async function getDiscover() {
  const apiUrl = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

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
