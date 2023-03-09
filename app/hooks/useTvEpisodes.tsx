'use client'
import getTvSeasons from '@/services/getTvSeasons'
import { useState, useEffect } from 'react'

interface Props {
  id: number
  seasonNumber: number
}

interface Event {
  episodes: any
}

export function useTvEpisodes({ id, seasonNumber }: Props) {
  const [episodes, setEpisodes] = useState<Event | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(
    function () {
      setLoading(true)
      getTvSeasons({ id, seasonNumber }).then(episode => {
        setLoading(false)
        setEpisodes(episode)
      })
    },
    [id, seasonNumber]
  )
  return { episodes, loading }
}
