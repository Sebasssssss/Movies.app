'use client'
import ListOfCards from 'components/ListOfCards'
import { useMovies } from '@/hooks/useMovies'

export default function Page() {
  const { movies } = useMovies({ category: 'upcoming' })
  return (
    <main className="h-full max-w-[1200px] mx-auto p-4 mt-20">
      <ListOfCards movies={movies} />
    </main>
  )
}
