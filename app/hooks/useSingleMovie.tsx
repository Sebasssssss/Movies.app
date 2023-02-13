'use client'
import { useEffect, useState } from 'react'
import getSingleMovie from '../services/getSingleMovie'

export default function useSingleMovie({ id }) {
  const [singleMovie, setSingleMovie] = useState([])

  useEffect(
    function () {
      getSingleMovie({ id })
        .then((movie: any) => {
          setSingleMovie(movie)
        })
        .catch(err => {
          console.log(err)
        })
    },
    [id, singleMovie]
  )
  const hoursConvert = (num: number) => {
    let hours = Math.floor(num / 60)
    let minutes = num % 60
    return hours + 'h' + ' : ' + minutes + 'min'
  }

  return { singleMovie, hoursConvert }
}
