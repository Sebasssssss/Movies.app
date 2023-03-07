'use client'
import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useMovies } from './useMovies'

export default function useSuggestions() {
  const [keyword, setKeyword] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const router = useRouter()
  const { movies } = useMovies({ category: 'popular' })

  const listMovies = movies.map(movie => movie)
  const titles = listMovies.map(({ title }) => title)

  const handleSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault()
      if (keyword == '') return null
      router.push(`/pages/search/${keyword}`)
    },
    [keyword, router]
  )

  const handleChange = useCallback(
    e => {
      setKeyword(e.target.value)
      let matches: string[] = []

      if (e.target.value.length > 0) {
        matches = titles.filter((title: string) => {
          const regex = new RegExp(`${e.target.value}`, 'gi')
          return title.match(regex)
        })
      }
      setSuggestions(matches)
    },
    [titles]
  )

  const handleSuggestion = useCallback(prop => {
    setKeyword(prop)
    setSuggestions([])
  }, [])

  return {
    handleSuggestion,
    handleChange,
    handleSubmit,
    keyword,
    suggestions
  }
}
