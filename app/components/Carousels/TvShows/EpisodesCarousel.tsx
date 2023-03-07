'use client'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'
import EpisodesCard from '@/components/EpisodesCard'
import { SwiperSlide } from 'swiper/react'
import { useTvEpisodes } from '@/hooks/useTvEpisodes'

export default function EpisodesCarousel({ id }) {
  const { episodes } = useTvEpisodes({ id: id, seasonNumber: 1 })

  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">Episodes</h1>
        </div>
        <Swiper
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            '320': {
              slidesPerView: 1,
              spaceBetween: 40
            },
            '640': {
              slidesPerView: 2,
              spaceBetween: 40
            },
            '768': {
              slidesPerView: 2,
              spaceBetween: 20
            },
            '1000': {
              slidesPerView: 3,
              spaceBetween: 40
            },
            '1250': {
              slidesPerView: 4,
              spaceBetween: 50
            },
            '1420': {
              slidesPerView: 6,
              spaceBetween: 50
            }
          }}
          className="py-8"
        >
          {episodes.episodes
            ?.map(episode => {
              return (
                <SwiperSlide key={episode.id}>
                  <EpisodesCard
                    name={episode.name}
                    still_path={episode.still_path}
                    vote_average={episode.vote_average}
                    episode_number={episode.episode_number}
                  />
                </SwiperSlide>
              )
            })
            .slice(0, 20)}
        </Swiper>
      </div>
    </div>
  )
}
