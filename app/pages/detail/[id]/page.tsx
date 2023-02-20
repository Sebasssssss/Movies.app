'use client'
import SimilarMovieCar from '@/components/Carousels/SimilarMovie'
import Image from 'next/image'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { Rubik } from '@next/font/google'
import { hoursConvert, useSingleMovie } from '@/hooks/useSingleMovie'
import { BsDot } from 'react-icons/bs'

const rubik = Rubik({ subsets: ['latin'] })

export default function Page({ params }) {
  const { singleMovie } = useSingleMovie({ id: params.id })

  return (
    <main className="w-full h-full overflow-hidden">
      <div className="w-full h-full fixed -z-10">
        <Image
          src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
          alt={singleMovie.title}
          fill
        />
        <div className="backdrop-blur-md w-full h-full bg-black/50"></div>
      </div>
      <div className="h-[100vh] max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5 justify-center p-24 w-full">
          <div className="w-[340px] h-auto md:w-[370px] overflow-hidden md:shadow-2xl shadow-black">
            <Image
              src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
              alt={singleMovie.title}
              width="370"
              height="450"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="grid lg:flex lg:flex-col gap-4 lg:justify-center text-center lg:text-left place-items-center lg:place-items-start">
            <h1 className={`${rubik.className} text-4xl font-semibold`}>
              {singleMovie.title}
            </h1>
            <h1 className={`${rubik.className} text-sm`}>
              {singleMovie.overview}
            </h1>
            <div className="inline-flex items-center gap-1">
              <h1 className="text-sm">{singleMovie.release_date}</h1>
              <BsDot className="w-7 h-auto" />
              <h1 className="text-sm">Action, Fantasy</h1>
              <BsDot className="w-7 h-auto" />
              <h1 className="text-sm lg:text-lg">
                {hoursConvert(singleMovie.runtime)}
              </h1>
            </div>
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
        </div>
      </div>
      <div className="grid w-full mt-64">
        <h1 className={`${rubik.className} text-xl px-10 font-semibold`}>
          Similar movies
        </h1>
        <SimilarMovieCar id={params.id} />
      </div>
    </main>
  )
}
