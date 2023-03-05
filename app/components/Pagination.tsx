import { IoArrowBack, IoArrowForward } from 'react-icons/io5'

export default function Pagination({ handlePrevPage, handleNextPage }) {
  return (
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
  )
}
