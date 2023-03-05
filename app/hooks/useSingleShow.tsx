'use client'
import { useEffect, useState } from 'react'
import getSingleShow from '@/services/getSingleShow'
import { Props } from '@/interfaces/services.d'

export function useSingleShow({ id }: Props) {
  const [singleShow, setSingleShow] = useState([])

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
