'use client'
import ListOfCards from 'components/ListOfMovies'
import Pagination from '@/components/Pagination'
import usePagination from '@/hooks/usePagination'
import { useSearch } from 'hooks/useSearch'

export default function Page({ params }) {
  const { keyword } = params
  const { page, handleNextPage, handlePrevPage } = usePagination()
  const { movies } = useSearch({ keyword, page: page })

  return (
    <>
      <main className="w-full px-[96px] text-center grid justify-center items-center gap-[32px] mt-[128px]">
        <ListOfCards movies={movies} />
        <Pagination
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </main>
    </>
  )
}
