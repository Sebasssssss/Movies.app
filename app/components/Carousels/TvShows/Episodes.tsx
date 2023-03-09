'use client'
import EpisodesCard from '@/components/EpisodesCard'
import Carousel from '@/components/Layouts/Swiper'
import { useState } from 'react'
import { SwiperSlide } from 'swiper/react'
import { useTvEpisodes } from '@/hooks/useTvEpisodes'
import SeasonSelect from '@/components/SeasonSelect'

interface Props {
  id: number
  number_of_seasons: number
}

export default function Episodes({ id, number_of_seasons }: Props) {
  const [season, setSeason] = useState(1)
  const { episodes } = useTvEpisodes({ id: id, seasonNumber: season })

  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">Episodes</h1>
          <SeasonSelect
            number_of_seasons={number_of_seasons}
            setSeason={setSeason}
          />
        </div>
        <Carousel slidesPerView={6}>
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
        </Carousel>
      </div>
    </div>
  )
}
