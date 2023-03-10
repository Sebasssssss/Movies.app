'use client'
import Pagination from '@/components/Pagination'
import ListOfShows from '@/components/ListOfShows'
import usePagination from '@/hooks/usePagination'
import useShows from '@/hooks/useShows'

export default function Page() {
  const { page, handleNextPage, handlePrevPage } = usePagination()
  const { shows } = useShows({ category: 'top_rated', page })

  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center">
      <h1 className="text-[64px] py-[96px] font-outfit">Popular Shows</h1>
      <ListOfShows shows={shows} />
      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
      />
    </main>
  )
}
