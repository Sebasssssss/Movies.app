'use client'
import ListOfMovies from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import './globals.css'

export default function Home() {
  const { movies } = useMovies()
  return (
    <main className="h-[100vh] max-w-[1200px] mx-auto p-4 mt-20">
      <ListOfMovies movies={movies} />
    </main>
  )
}
