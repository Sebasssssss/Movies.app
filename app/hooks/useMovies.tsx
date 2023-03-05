'use client'
import getMovies from '@/services/getMovies'
import { Props } from 'interfaces/services.d'
import { useState, useEffect } from 'react'

export function useMovies({ category, page }: Props) {
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
