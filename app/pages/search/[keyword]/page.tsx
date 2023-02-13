'use client'
import { useSearch } from '@/app/hooks/useSearch'
import ListOfMovies from '../../../components/ListOfMovies'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  return (
    <main className="h-[100vh] max-w-[1200px] mx-auto p-4 mt-20">
      <ListOfMovies movies={movies} />
    </main>
  )
}
