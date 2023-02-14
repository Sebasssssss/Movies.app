'use client'
import Image from 'next/image'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { Inter } from '@next/font/google'
import { hoursConvert, useSingleMovie } from '@/hooks/useSingleMovie'

const inter = Inter({ subsets: ['latin'] })

export default function Page({ params }) {
  const { singleMovie } = useSingleMovie({ id: params.id })

  return (
    <main className="w-full h-screen">
      <div className="w-full h-full fixed -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
          alt={singleMovie.title}
          fill
        />
        <div className="backdrop-blur-md w-full h-full bg-black/50"></div>
      </div>
      <div className="h-[100vh] max-w-[1200px] mx-auto p-4">
        <div className="grid grid-cols-2 gap-5 place-items-center p-24">
          <div className="grid gap-4">
            <h1 className={`${inter.className} text-4xl font-semibold`}>
              {singleMovie.title}
            </h1>
            <h1 className={`${inter.className} text-sm`}>
              {singleMovie.overview}
            </h1>
            <h1 className="text-sm">{hoursConvert(singleMovie.runtime)}</h1>
            <h1 className="text-sm">{singleMovie.release_date}</h1>
            <div className="inline-flex items-center gap-1">
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStarHalf className="fill-yellow-500" />
            </div>
            <button className="w-max rounded bg-red-500 px-3 py-1">
              Watch
            </button>
          </div>
          <div className="w-[270px] h-[350px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
              className="rounded-sm shadow-2xl"
              alt={singleMovie.title}
              width="270"
              height="350"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
