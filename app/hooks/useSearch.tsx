'use client'
import { useEffect, useState } from 'react'
import searchMovies from 'services/searchMovies'

interface Props {
  keyword: string
  page: number
}

export function useSearch({ keyword, page = 1 }: Props) {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(false)

  useEffect(
    function () {
      searchMovies({ keyword, page })
        .then(movie => setMovies(movie))
        .catch(() => setError(true))
    },
    [keyword, page]
  )

  return { movies, error }
}
