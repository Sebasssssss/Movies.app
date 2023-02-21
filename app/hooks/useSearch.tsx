'use client'
import { useEffect, useState } from 'react'
import searchMovies from 'services/searchMovies'

export function useSearch({ keyword }) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

  useEffect(
    function () {
      searchMovies({ keyword })
        .then(movie => setMovies(movie))
        .catch(() => setError(true))
    },
    [keyword]
  )

  return { movies, error }
}
