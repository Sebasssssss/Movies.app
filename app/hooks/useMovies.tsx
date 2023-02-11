'use client'
import { useState, useEffect } from 'react'
import getMovies from '../services/getMovies'

export function useMovies() {
  const [movies, setMovies] = useState([])

  useEffect(
    function () {
      getMovies().then(movie => {
        setMovies(movie)
      })
    },
    [setMovies]
  )

  return { movies }
}
