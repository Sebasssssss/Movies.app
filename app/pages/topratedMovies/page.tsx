'use client'
import ListOfMovies from 'components/ListOfMovies'
import Pagination from '@/components/Pagination'
import usePagination from '@/hooks/usePagination'
import { useMovies } from '@/hooks/useMovies'

export default function Page() {
  const { page, handleNextPage, handlePrevPage } = usePagination()
  const { movies } = useMovies({ category: 'top_rated', page })
  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center">
      <h1 className="text-[64px] py-[96px] font-outfit">Top rated movies</h1>
      <ListOfMovies movies={movies} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  )
}
