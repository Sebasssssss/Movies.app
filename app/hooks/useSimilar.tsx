'use client'
import { Props } from '@/interfaces/services.d'
import getSimilarMovie from '@/services/getSimilar'
import { useEffect, useState } from 'react'

export function useSimilar({ category, id }: Props) {
  const [similar, setSimilar] = useState([])

  useEffect(
    function () {
      getSimilarMovie({ category, id })
        .then(movie => setSimilar(movie))
        .catch(err => console.log(err))
    },
    [id, category]
  )

  return { similar }
}
