import { API_URL, API_KEY } from './settings'

export default async function searchMovies({ keyword }: any = {}) {
  const apiUrl = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${keyword}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie: any) => {
        const { id, runtime, title, poster_path, release_date, popularity } =
          movie
        return {
          id,
          title,
          runtime,
          poster_path,
          release_date,
          popularity
        }
      })
      return movies
    })
}
