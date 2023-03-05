'use client'
import getTvShow from '@/services/getTvShow'
import { useState, useEffect } from 'react'

type Category = {
  category: string
}

export default function useShows({ category }: Category) {
  const [shows, setShows] = useState([])

  useEffect(
    function () {
      getTvShow({ category }).then(show => setShows(show))
    },
    [setShows, category]
  )

  return { shows }
}
