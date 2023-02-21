'use client'
import SimilarMovieCar from '@/components/Carousels/SimilarMovie'
import Image from 'next/image'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { Rubik } from '@next/font/google'
import { hoursConvert, useSingleMovie } from '@/hooks/useSingleMovie'
import ListOfGenres from '@/components/ListOfGenres'

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
      <div className="h-full lg:h-[100vh] max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-5 place-items-center justify-center p-24 w-full">
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
            <div className="grid grid-rows-2 justify-center lg:justify-start w-full gap-2">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 w-full">
                <h1 className="text-sm">{singleMovie.release_date}</h1>
                <h1 className="text-sm">{hoursConvert(singleMovie.runtime)}</h1>
              </div>
              <ListOfGenres listofGenres={singleMovie} />
            </div>
            <div className="inline-flex items-center gap-1">
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStar className="fill-yellow-500" />
              <IoStarHalf className="fill-yellow-500" />
            </div>
            <button className="w-max rounded bg-[#EB454F] active:scale-[0.95] px-3 py-1 transition-transform duration-200 ease-in-out">
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full">
        <h1 className={`${rubik.className} text-xl px-10 font-semibold`}>
          Similar movies
        </h1>
        <SimilarMovieCar id={params.id} />
      </div>
    </main>
  )
}
