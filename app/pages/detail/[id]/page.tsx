'use client'
import Image from 'next/image'
import Carousel from '@/components/Carousel'
import Card from '@/components/Card'
import { SwiperSlide } from 'swiper/react'
import { IoStar, IoStarHalf } from 'react-icons/io5'
import { Rubik } from '@next/font/google'
import { apiTypes } from '@/interfaces/movie'
import { hoursConvert, useSingleMovie } from '@/hooks/useSingleMovie'
import { useSimilarMovie } from '@/hooks/useSimilarMovie'

const rubik = Rubik({ subsets: ['latin'] })

export default function Page({ params }) {
  const { singleMovie } = useSingleMovie({ id: params.id })
  const { similar } = useSimilarMovie({ id: params.id })

  return (
    <main className="w-full h-full">
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
            <h1 className={`${rubik.className} text-4xl font-semibold`}>
              {singleMovie.title}
            </h1>
            <h1 className={`${rubik.className} text-sm`}>
              {singleMovie.overview}
            </h1>
            <h1 className="text-lg">{hoursConvert(singleMovie.runtime)}</h1>
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
          <div className="w-[370px] h-[520px] overflow-hidden shadow-2xl shadow-black">
            <Image
              src={`https://image.tmdb.org/t/p/w500${singleMovie.poster_path}`}
              alt={singleMovie.title}
              width="370"
              height="450"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
      <div className="grid w-full bg-gradient-to-t from-black/90 to-black/0">
        <h1 className={`${rubik.className} text-xl px-10 font-semibold`}>
          Similar movies
        </h1>
        <Carousel>
          {similar.map((props: apiTypes) => (
            <SwiperSlide key={props.id}>
              <Card
                adult={props.adult}
                id={props.id}
                title={props.title}
                poster_path={props.poster_path}
                release_date={props.release_date}
                popularity={props.popularity}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </main>
  )
}
