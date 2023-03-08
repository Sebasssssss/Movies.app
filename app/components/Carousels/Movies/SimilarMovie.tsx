'use client'
import Carousel from 'components/Layouts/Swiper'
import Movie from '@/components/Movie'
import { SwiperSlide } from 'swiper/react'
import { apiTypes } from 'interfaces/movie.d'
import { useSimilar } from '@/hooks/useSimilar'

export default function SimilarMovieCar({ id }) {
  const { similar } = useSimilar({ category: 'movie', id })
  return (
    <Carousel>
      {similar.map((props: apiTypes) => (
        <SwiperSlide key={props.id}>
          <Movie
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
