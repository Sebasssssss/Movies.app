'use client'
import getTvShow from '@/services/getTvShow'
import { useState, useEffect } from 'react'

export default function useShows() {
  const [shows, setShows] = useState([])

  useEffect(
    function () {
      getTvShow().then(show => setShows(show))
    },
    [setShows]
  )

  return { shows }
}
