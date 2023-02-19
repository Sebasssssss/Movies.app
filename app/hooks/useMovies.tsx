'use client'
import { useState, useEffect } from 'react'
import getMovies from 'services/getMovies'

export function useMovies({ category }) {
  const [movies, setMovies] = useState([])

  useEffect(
    function () {
      getMovies({ category }).then(movie => setMovies(movie))
    },
    [setMovies, category]
  )

  return { movies }
}
