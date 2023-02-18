import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { useSimilarMovie } from '@/hooks/useSimilarMovie'
import { apiTypes } from 'interfaces/movie'
import Movies from './Movie'

export default function Carousel({ params }) {
  const { similar } = useSimilarMovie({ id: params.id })

  return (
    <Swiper navigation={true} modules={[Navigation]}>
      {similar.map((props: apiTypes) => (
        <SwiperSlide key={props.id}>
          {' '}
          <Movies
            adult={props.adult}
            id={props.id}
            title={props.title}
            poster_path={props.poster_path}
            release_date={props.release_date}
            popularity={props.popularity}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
