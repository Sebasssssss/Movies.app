'use client'
import Carousel from 'components/Layouts/Swiper'
import Show from '@/components/Show'
import { SwiperSlide } from 'swiper/react'
import { Shows } from '@/interfaces/shows.d'
import { useSimilar } from '@/hooks/useSimilar'

export default function SimilarShowCar({ id }) {
  const { similar } = useSimilar({ category: 'tv', id })
  return (
    <Carousel>
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
    </Carousel>
  )
}
