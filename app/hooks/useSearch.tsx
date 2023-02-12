import { useEffect, useState } from 'react'
import searchMovies from '../services/searchMovies'

export function useSearch({ keyword } = { keyword: null }) {
  const [movies, setMovies] = useState([])
  useEffect(
    function () {
      searchMovies({ keyword }).then(movie => {
        setMovies(movie)
      })
    },
    [keyword, setMovies]
  )

  return { movies }
}
