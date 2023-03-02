'use client'
import Loader from '../Loader'
import Card from '../Card'
import Carousel from '../Carousel'
import { SwiperSlide } from 'swiper/react'
import { useMovies } from '@/hooks/useMovies'
import { apiTypes } from 'interfaces/movie.d'

export default function TrendingCarousel() {
  const { movies, loading } = useMovies({ category: 'top_rated' })
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
