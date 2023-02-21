'use client'
import { useState, useEffect } from 'react'
import getMovies from 'services/getMovies'

export function useMovies({ category, page }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      getMovies({ category, page }).then(movie => {
        setLoading(false)
        setMovies(movie)
      })
    },
    [setMovies, category, page]
  )

  return { movies, loading }
}
