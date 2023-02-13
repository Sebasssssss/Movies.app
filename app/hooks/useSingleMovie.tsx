'use client'
import { useEffect, useState } from 'react'
import getSingleMovie from '../services/getSingleMovie'
import { useMovies } from './useMovies'

export default function useSingleMovie({ id }) {
  const { movies } = useMovies()
  const [singleMovie, setSingleMovie] = useState([])

  useEffect(
    function () {
      if (!movies) {
        getSingleMovie({ id })
          .then((movie: any) => {
            setSingleMovie(movie)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    [id, movies]
  )
  const hoursConvert = (num: number) => {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + 'h' + ' : ' + minutes + 'min'
  }

  return { singleMovie, hoursConvert }
}
