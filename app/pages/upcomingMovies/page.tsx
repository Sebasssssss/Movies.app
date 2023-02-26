'use client'
import ListOfCards from 'components/ListOfCards'
import { useMovies } from '@/hooks/useMovies'

export default function Page() {
  const { movies } = useMovies({ category: 'upcoming', page: 2 })

  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center gap-[32px]">
      <h1 className="text-[64px] pt-[96px]">Popular movies</h1>
      <div className="w-full text-left">
        <h1 className="text-[32px] py-[32px] font-outfit">Drama</h1>
        <ListOfCards movies={movies.slice(0, 16)} />
      </div>
      <div className="w-full text-left">
        <h1 className="text-[32px] py-[32px] font-outfit">Animation</h1>
        <ListOfCards movies={movies.slice(0, 16)} />
      </div>
    </main>
  )
}
