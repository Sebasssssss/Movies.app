import Movies from './Movie'
import { apiTypes } from 'interfaces/movie'
import { useMovies } from '@/hooks/useMovies'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Carousel() {
  const { movies } = useMovies()

  return (
    <Swiper
      slidesPerView={4}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        '320': {
          slidesPerView: 2,
          spaceBetween: 10
        },
        '640': {
          slidesPerView: 4,
          spaceBetween: 20
        },
        '1000': {
          slidesPerView: 5,
          spaceBetween: 40
        },
        '1250': {
          slidesPerView: 7,
          spaceBetween: 50
        },
        '1420': {
          slidesPerView: 9,
          spaceBetween: 50
        }
      }}
      className="inline-flex items-center w-full justify-center p-10"
    >
      {movies.map((props: apiTypes) => (
        <SwiperSlide key={props.id}>
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
