import { API_URL, API_KEY } from 'services/settings'

interface Props {
  id: number
  seasonNumber: number
}

const fetchSeasons = async ({ id, seasonNumber }: Props) => {
  const apiUrl = `${API_URL}/tv/${id}/season/${seasonNumber}?api_key=${API_KEY}&language=en-US`
  return fetch(apiUrl).then(res => res.json())
}

export default async function getTvSeasons({ id, seasonNumber }: Props) {
  const { episodes = [] } = await fetchSeasons({ id, seasonNumber })
  return {
    episodes
  }
}
