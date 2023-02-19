'use client'
import Card from '../Card'
import Carousel from '../Carousel'
import { SwiperSlide } from 'swiper/react'
import { apiTypes } from 'interfaces/movie'
import useShows from '@/hooks/useShows'

export default function ShowCarousel() {
  const { shows } = useShows()
  return (
    <Carousel>
      {shows.map((props: apiTypes) => (
        <SwiperSlide key={props.id}>
          <Card
            adult={props.adult}
            id={props.id}
            title={props.title}
            poster_path={props.poster_path}
            release_date={props.release_date}
            popularity={props.popularity}
          />
        </SwiperSlide>
      ))}
    </Carousel>
  )
}
