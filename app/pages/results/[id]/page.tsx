'use client'
import { useSearch } from '@/app/hooks/useSearch'
import ListOfMovies from '../../../components/ListOfMovies'

export default function Page({ params }) {
  const { keyword } = params
  const { movies } = useSearch({ keyword })
  return (
    <main>
      <h1>Estoy en el id</h1>
      <ListOfMovies movies={movies} />
    </main>
  )
}
