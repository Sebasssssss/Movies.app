import { API_URL, API_KEY } from './settings'

export default async function getMovies() {
  const apiUrl = `${API_URL}/movie/popular?api_key=${API_KEY}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie: any) => {
        const { adult, id, title, poster_path, release_date, popularity } =
          movie
        return {
          adult,
          id,
          title,
          poster_path,
          release_date,
          popularity
        }
      })
      return movies
    })
}
