'use client'
import { useSearch } from 'hooks/useSearch'
import ListOfMovies from 'components/ListOfMovies'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  return (
    <main className="h-full max-w-[1200px] mx-auto p-4 mt-20">
      <ListOfMovies movies={movies} />
    </main>
  )
}
