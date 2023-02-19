'use client'
import { useSearch } from 'hooks/useSearch'
import ListOfCards from 'components/ListOfCards'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  return (
    <main className="h-full max-w-[1200px] mx-auto p-4 mt-20">
      <ListOfCards movies={movies} />
    </main>
  )
}
