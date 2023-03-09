import { API_URL, API_KEY } from 'services/settings'
import { apiTypes } from 'interfaces/movie.d'
import { Props } from 'interfaces/services.d'

const fetchSingleMovie = async (id: Props) => {
  const apiUrl = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  return fetch(apiUrl).then(res => res.json())
}

export default async function getSingleMovie({ id }: any) {
  const {
    runtime,
    title,
    poster_path,
    overview,
    release_date,
    genres
  }: apiTypes = await fetchSingleMovie(id)
  return { runtime, title, poster_path, overview, release_date, genres }
}
