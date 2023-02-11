import { api_url, api_key } from './settings'

export default async function getMovies() {
  const apiUrl = `${api_url}/movie/popular?api_key=${api_key}`

  return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const { results = [] } = response
      const movies = results.map((movie: any) => {
        const {
          adult,
          id,
          title,
          overview,
          poster_path,
          release_date,
          popularity
        } = movie
        return {
          adult,
          id,
          title,
          overview,
          poster_path,
          release_date,
          popularity
        }
      })
      return movies
    })
}
