import { api_url, api_key } from './settings'

export default async function searchMovies({ keyword }: any = {}) {
  const apiUrl = `${api_url}/search/movie?api_key=${api_key}&language=en-US&page=1&include_adult=false&query=${keyword}`

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
