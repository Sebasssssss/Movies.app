'use client'
import ListOfMovies from 'components/ListOfMovies'
import Pagination from '@/components/Pagination'
import usePagination from '@/hooks/usePagination'
import { useMovies } from '@/hooks/useMovies'

export default function Page() {
  const { page, handleNextPage, handlePrevPage } = usePagination()
  const { movies } = useMovies({ category: 'upcoming', page: page })

  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center gap-[64px]">
      <h1 className="text-[64px] pt-[96px]">Upcoming movies</h1>
      <ListOfMovies movies={movies} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  )
}
