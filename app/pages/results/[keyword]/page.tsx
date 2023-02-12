'use client'
import { useSearch } from '@/app/hooks/useSearch'
import ListOfMovies from '../../../components/ListOfMovies'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  return (
    <main>
      <ListOfMovies movies={movies} />
    </main>
  )
}
