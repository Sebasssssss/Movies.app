'use client'
import SimilarMovieCar from '@/components/Carousels/SimilarMovie'
import Image from 'next/image'
import { hoursConvert, useSingleMovie } from '@/hooks/useSingleMovie'
import ListOfGenres from '@/components/ListOfGenres'

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
      <div className="w-full px-[128px] mx-auto py-4">
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
            <h1 className="text-4xl font-outfit">{singleMovie.title}</h1>
            <h1>{singleMovie.overview}</h1>
            <div className="grid grid-rows-2 justify-center lg:justify-start w-full gap-2 font-outfit">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 w-full">
                <h1 className="text-sm">{singleMovie.release_date}</h1>
                <h1 className="text-sm">{hoursConvert(singleMovie.runtime)}</h1>
              </div>
              <ListOfGenres listofGenres={singleMovie} />
            </div>
            <button className="w-max rounded bg-[#EB454F] active:scale-[0.95] px-3 py-1 transition-transform duration-200 ease-in-out">
              Watch
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full">
        <h1 className="text-xl px-10 font-semibold font-outfit">
          Similar movies
        </h1>
        <SimilarMovieCar id={params.id} />
      </div>
    </main>
  )
}
