import { API_URL, API_KEY } from 'services/settings'
import { Shows } from '@/interfaces/shows.d'
import { Props } from 'interfaces/services.d'

const fetchSingleMovie = async (id: Props) => {
  const apiUrl = `${API_URL}/tv/${id}?api_key=${API_KEY}&language=en-US`
  return fetch(apiUrl).then(res => res.json())
}

export default async function getSingleShow({ id }) {
  const {
    name,
    poster_path,
    vote_average,
    runtime,
    overview,
    number_of_seasons,
    number_of_episodes,
    genres,
    seasons
  }: Shows = await fetchSingleMovie(id)
  return {
    name,
    poster_path,
    vote_average,
    overview,
    runtime,
    genres,
    seasons,
    number_of_seasons,
    number_of_episodes
  }
}
