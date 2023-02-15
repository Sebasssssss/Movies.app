'use client'
import getSimilarMovie from 'services/getSimilar'
import { useEffect, useState } from 'react'

export function useSimilarMovie({ id }) {
  const [similar, setSimilar] = useState([])

  useEffect(
    function () {
      getSimilarMovie({ id })
        .then(movie => setSimilar(movie))
        .catch(err => console.log(err))
    },
    [id]
  )

  return { similar }
}
