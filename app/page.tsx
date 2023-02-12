'use client'
import ListOfMovies from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import './globals.css'

export default function Home() {
  const { movies } = useMovies()
  return (
    <main>
      <ListOfMovies movies={movies} />
    </main>
  )
}
