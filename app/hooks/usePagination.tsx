import { useState, useCallback } from 'react'
export default function usePagination() {
  const [page, setPage] = useState(1)
  const [nextPage, setNextPage] = useState(page)
  const [prevPage, setPrevPage] = useState(page)

  const handlePrevPage = useCallback(() => {
    page == 1 ? setPage(1) : setPrevPage(setPage(page - 1))
  }, [page])

  const handleNextPage = useCallback(() => {
    setNextPage(setPage(page + 1))
  }, [page])

  return { page, handleNextPage, handlePrevPage }
}
