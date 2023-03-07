'use client'
import EpisodesCard from '@/components/EpisodesCard'
import EpisodesCarousel from '@/components/Layouts/EpisodesCarousel'
import { SwiperSlide } from 'swiper/react'
import { useTvEpisodes } from '@/hooks/useTvEpisodes'

export default function Episodes({ id }) {
  const { episodes } = useTvEpisodes({ id: id, seasonNumber: 1 })

  return (
    <EpisodesCarousel>
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
    </EpisodesCarousel>
  )
}
