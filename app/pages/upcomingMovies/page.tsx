'use client'
import ListOfCards from 'components/ListOfCards'
import usePagination from '@/hooks/usePagination'
import { useMovies } from '@/hooks/useMovies'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

export default function Page() {
  const { page, handleNextPage, handlePrevPage } = usePagination()
  const { movies } = useMovies({ category: 'upcoming', page: page })

  return (
    <main className="w-full px-[96px] text-center grid justify-center items-center gap-[64px]">
      <h1 className="text-[64px] pt-[96px]">Upcoming movies</h1>
      <ListOfCards movies={movies} />
      <div className="w-full grid grid-cols-2 gap-2 py-[32px]">
        <button
          onClick={handlePrevPage}
          className="py-4 w-full bg-[#161616] cursor-pointer rounded inline-flex items-center font-outfit justify-start hover:bg-zinc-800 active:bg-zinc-700 transition-colors duration-200"
        >
          <IoArrowBack className="text-xl mx-2" />
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          className="py-4 w-full font-outfit bg-[#161616] rounded cursor-pointer inline-flex items-center justify-end hover:bg-zinc-800 active:bg-zinc-700 transition-colors duration-200"
        >
          Next page
          <IoArrowForward className="text-xl mx-2" />
        </button>
      </div>
    </main>
  )
}
