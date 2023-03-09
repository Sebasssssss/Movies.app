'use client'
import { useEffect, useState } from 'react'
import getSingleShow from '@/services/getSingleShow'
import { Props } from '@/interfaces/services.d'

interface Event {
  name: string | undefined
  poster_path: string | undefined
  vote_average: number | undefined
  overview: string | undefined
  runtime: number | undefined
  genres: [] | undefined
  seasons: [] | undefined
  number_of_seasons: number | undefined
  number_of_episodes: number | undefined
}

export function useSingleShow({ id }: Props) {
  const [singleShow, setSingleShow] = useState<Event | []>([])

  useEffect(
    function () {
      getSingleShow({ id })
        .then(show => setSingleShow(show))
        .catch(err => console.log(err))
    },
    [id]
  )

  return { singleShow }
}
