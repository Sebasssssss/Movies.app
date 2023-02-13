import { API_URL, API_KEY } from '../services/settings'

const dataFromApi = (apiResponse: any) => {
  const { results } = apiResponse
  const { runtime, title, poster_path, overview, release_date } = results
  return { runtime, title, poster_path, overview, release_date }
}

export default async function getSingleMovie({ id }: any) {
  const apiUrl = `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(dataFromApi)
}
