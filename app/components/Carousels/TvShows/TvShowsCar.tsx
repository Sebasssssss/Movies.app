'use client'
import Carousel from 'components/Layouts/Swiper'
import Show from '@/components/Show'
import { SwiperSlide } from 'swiper/react'
import { apiTypes } from 'interfaces/movie.d'
import useShows from '@/hooks/useShows'
import Link from 'next/link'
import { IoChevronForward } from 'react-icons/io5'

export default function ShowCarousel() {
  const { shows } = useShows({ category: 'popular' })
  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">
            Popular Tv shows
          </h1>
          <Link
            href="/pages/tvshows"
            className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] font-outfit bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
          >
            See more <IoChevronForward className="mt-0.5" />
          </Link>
        </div>
        <Carousel slidesPerView={8}>
          {shows.map((props: apiTypes) => (
            <SwiperSlide key={props.id}>
              <Show
                adult={props.adult}
                id={props.id}
                name={props.name}
                poster_path={props.poster_path}
                release_date={props.release_date}
                vote_average={props.vote_average}
              />
            </SwiperSlide>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
