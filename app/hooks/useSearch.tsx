'use client'
import { useEffect, useState } from 'react'
import searchMovies from '../services/searchMovies'

export function useSearch({ keyword }) {
  const [movies, setMovies] = useState([])
  const keywordToUse = keyword

  useEffect(
    function () {
      searchMovies({ keyword: keywordToUse }).then(movie => {
        setMovies(movie)
      })
    },
    [keywordToUse]
  )

  return { movies }
}
