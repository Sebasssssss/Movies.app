'use client'
import { Props } from '@/interfaces/services.d'
import getTvShow from '@/services/getTvShow'
import { useState, useEffect } from 'react'

export default function useShows({ category, page }: Props) {
  const [shows, setShows] = useState([])

  useEffect(
    function () {
      getTvShow({ category, page }).then(show => setShows(show))
    },
    [setShows, category, page]
  )

  return { shows }
}
