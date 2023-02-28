'use client'
import { useSearch } from 'hooks/useSearch'
import ListOfCards from 'components/ListOfCards'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })

  return (
    <>
      <main className="w-full px-[96px] text-center grid justify-center items-center gap-[32px] mt-[128px]">
        <ListOfCards movies={movies} />
      </main>
    </>
  )
}
