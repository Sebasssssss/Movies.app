'use client'
import Carousel from '../Carousel'
import Card from '../Card'
import { SwiperSlide } from 'swiper/react'
import { apiTypes } from 'interfaces/movie.d'
import { useSimilarMovie } from '@/hooks/useSimilarMovie'

export default function SimilarMovieCar({ id }) {
  const { similar } = useSimilarMovie({ id })
  return (
    <Carousel>
      {similar.map((props: apiTypes) => (
        <SwiperSlide key={props.id}>
          <Card
            adult={props.adult}
            id={props.id}
            title={props.title}
            poster_path={props.poster_path}
            release_date={props.release_date}
            vote_average={props.vote_average}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
