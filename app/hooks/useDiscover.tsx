'use client'
import getDiscover from '@/services/getDiscover'
import { Props } from 'interfaces/services.d'
import { useState, useEffect } from 'react'

export function useDiscover({ category, sort }: Props) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(
    function () {
      setLoading(true)
      getDiscover({ category, sort }).then(movie => {
        setLoading(false)
        setMovies(movie)
      })
    },
    [setMovies, category, sort]
  )
  return { movies, loading }
}
