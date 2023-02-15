'use client'
import ListOfMovies from './components/ListOfMovies'
import { useMovies } from './hooks/useMovies'
import './globals.css'
import { IoAdd, IoPlay, IoStar } from 'react-icons/io5'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { movies } = useMovies()
  return (
    <>
      <main className="h-[100vh] grid items-center w-full bg-[url('../public/homepage.jpg')] bg-cover bg-center">
        <div className="w-full h-[100vh] bg-black/50">
          <div className="max-w-[1200px] mx-auto w-full h-[100vh] grid items-center">
            <div className="text-justify grid gap-5 w-96">
              <h1 className="flex items-center gap-1">
                <IoStar className="fill-yellow-500" /> 7.5
              </h1>
              <h1 className={`${inter.className} text-4xl font-semibold`}>
                Peaky Blinders
              </h1>
              <p className={`${inter.className} text-sm`}>
                A gangster family epic set in 1900s England, centering on a gang
                who sew razor blades in the peaks of their caps, and their
                fierce boss Tommy Shelby. Thomas Shelby and his brothers return
                to Birmingham after serving in the British Army during WWI.
              </p>
              <div className="inline-flex items-center gap-4">
                <button className="uppercase bg-red-700 rounded-full px-7 py-2 inline-flex items-center gap-2">
                  <IoPlay /> watch
                </button>
                <button className="uppercase bg-black rounded-full px-7 py-2 inline-flex items-center gap-2">
                  <IoAdd /> watch
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="max-w-[1200px] mx-auto p-4">
        <ListOfMovies movies={movies} />
      </div>
    </>
  )
}
