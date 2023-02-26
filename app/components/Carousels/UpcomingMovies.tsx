'use client'
import Card from '../Card'
import Carousel from '../Carousel'
import Loader from '../Loader'
import { SwiperSlide } from 'swiper/react'
import { useMovies } from '@/hooks/useMovies'
import { apiTypes } from 'interfaces/movie'

export default function UpcomingCarousel() {
  const { movies, loading } = useMovies({ category: 'upcoming' })
  return loading ? (
    <div className="w-full grid place-items-center">
      <Loader />
    </div>
  ) : (
    <Carousel>
      {movies.map((props: apiTypes) => (
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
