'use client'
import { useEffect, useState } from 'react'
import getSingleMovie from 'services/getSingleMovie'

export function useSingleMovie({ id }): {} {
  const [singleMovie, setSingleMovie] = useState([])

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
  return hours + 'h' + ' ' + minutes + 'min'
}
