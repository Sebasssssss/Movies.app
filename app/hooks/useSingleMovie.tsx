'use client'
import getSingleMovie from '@/services/getSingleMovie'
import { Props } from 'interfaces/services.d'
import { useEffect, useState } from 'react'

interface Event {
  runtime: number | undefined
  title: string | undefined
  poster_path: string | undefined
  overview: string | undefined
  release_date: string | undefined
  genres: string | number | undefined
}

export function useSingleMovie({ id }: Props) {
  const [singleMovie, setSingleMovie] = useState<any | []>([])

  useEffect(
    function () {
      getSingleMovie({ id })
        .then(movie => setSingleMovie(movie))
        .catch(err => console.log(err))
    },
    [id]
  )

  return { singleMovie }
}

export const hoursConvert = (num: number) => {
  let hours = Math.floor(num / 60)
  let minutes = num % 60
  return hours + ' h' + ' ' + minutes + ' min'
}
