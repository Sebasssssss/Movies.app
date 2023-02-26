'use client'
import ListOfCards from 'components/ListOfCards'
import { useMovies } from '@/hooks/useMovies'

export default function Page() {
  const { movies } = useMovies({ category: 'popular', page: '2' })
  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center">
      <h1 className="text-[64px] py-[96px] font-outfit">Popular Movies</h1>
      <ListOfCards movies={movies} />
    </main>
  )
}
