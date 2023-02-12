import { api_url, api_key } from '../../../services/settings'

const fetchSingleMovie = async (id: number) => {
  const apiUrl = `${api_url}/movie/${id}?api_key=${api_key}&language=en-US`
  return fetch(apiUrl).then(res => res.json())
}

export default async function Page({ params }) {
  const { id } = params
  const movie = await fetchSingleMovie(id)

  return (
    <main>
      <h1 className="text-8xl z-10">{movie.title}</h1>
    </main>
  )
}
