'use client'
import { useSearch } from '@/hooks/useSearch'

export default function Head({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  const title = movies
    ? `${movies.length} results of ${decodeURI(keyword)}`
    : ''

  return <title>{title}</title>
}
