'use client'
import Link from 'next/link'
import Carousel from 'components/Layouts/Swiper'
import Show from '@/components/Show'
import { SwiperSlide } from 'swiper/react'
import { Shows } from '@/interfaces/shows.d'
import { useSimilar } from '@/hooks/useSimilar'
import { IoChevronForward } from 'react-icons/io5'

export default function SimilarShowCar({ id }) {
  const { similar } = useSimilar({ category: 'tv', id })
  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">
            Tv shows going live today
          </h1>
          <Link
            href="/pages/tvshows"
            className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] font-outfit bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
          >
            See more <IoChevronForward className="mt-0.5" />
          </Link>
        </div>
        <Carousel slidesPerView={8}>
          {similar.map((props: Shows) => (
            <SwiperSlide key={props.id}>
              <Show
                id={props.id}
                name={props.name}
                poster_path={props.poster_path}
                vote_average={props.vote_average}
              />
            </SwiperSlide>
          ))}
        </Carousel>{' '}
      </div>
    </div>
  )
}
