'use client'
import { useState, useEffect } from 'react'
import getMovies from 'services/getMovies'

interface Props {
  category: string
  page: number
}

export function useMovies({ category, page = 1 }: Props) {
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
