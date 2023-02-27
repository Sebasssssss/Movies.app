'use client'
import getDiscover from '@/services/getDiscover'
import { useState, useEffect } from 'react'

export function useDiscover() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      getDiscover().then(movie => {
        setLoading(false)
        setMovies(movie)
      })
    },
    [setMovies]
  )

  return { movies, loading }
}
