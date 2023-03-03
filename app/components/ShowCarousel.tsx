'use client'
import Carousel from 'components/Carousel'
import Card from './Card'
import Link from 'next/link'
import useShows from 'hooks/useShows'
import { SwiperSlide } from 'swiper/react'
import { IoChevronForward } from 'react-icons/io5'
import { apiTypes } from 'interfaces/movie.d'

export default function ShowCarousel() {
  const { shows } = useShows()
  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">Tv shows</h1>
          <Link
            href="/pages/topratedMovies"
            className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] font-outfit bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
          >
            See more <IoChevronForward className="mt-0.5" />
          </Link>
        </div>
        <Carousel>
          {shows.map((props: apiTypes) => (
            <SwiperSlide key={props.id}>
              <Card
                adult={props.adult}
                id={props.id}
                title={props.title}
                poster_path={props.poster_path}
                release_date={props.release_date}
                popularity={props.vote_average}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
