import { API_URL, API_KEY } from 'services/settings'
import { apiTypes } from 'interfaces/movie'

export default async function getTvShow() {
  const apiUrl = `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const shows = results.map(show => {
        const {
          adult,
          id,
          title,
          poster_path,
          release_date,
          vote_average
        }: apiTypes = show
        return { adult, id, title, poster_path, release_date, vote_average }
      })
      return shows
    })
}
