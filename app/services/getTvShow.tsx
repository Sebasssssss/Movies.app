import { API_URL, API_KEY } from 'services/settings'
import { Shows } from '@/interfaces/shows.d'
import { Props } from 'interfaces/services.d'

export default async function getTvShow({ category, page = 1 }: Props) {
  const apiUrl = `${API_URL}/tv/${category}?api_key=${API_KEY}&language=en-US&page=${page}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const shows = results.map((show: Shows) => {
        const {
          id,
          name,
          poster_path,
          vote_average,
          runtime,
          overview,
          number_of_seasons,
          number_of_episodes,
          genres,
          seasons
        } = show
        return {
          id,
          name,
          poster_path,
          vote_average,
          runtime,
          overview,
          number_of_seasons,
          number_of_episodes,
          genres,
          seasons
        }
      })
      return shows
    })
}
