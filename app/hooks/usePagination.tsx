import { useState } from 'react'
export default function usePagination() {
  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(page)
  const [prevPage, setPrevPage] = useState(page)

  const handlePrevPage = () => {
    page == 1 ? setPage(1) : setPrevPage(setPage(page - 1))
  }

  const handleNextPage = () => {
    setNextPage(setPage(page + 1))
  }

  return { page, handleNextPage, handlePrevPage }
}
