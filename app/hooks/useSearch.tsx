'use client'
import { useEffect, useState } from 'react'
import searchMovies from 'services/searchMovies'

export function useSearch({ keyword }) {
  const [movies, setMovies] = useState([])

  useEffect(
    function () {
      searchMovies({ keyword }).then(movie => setMovies(movie))
    },
    [keyword]
  )

  return { movies }
}
