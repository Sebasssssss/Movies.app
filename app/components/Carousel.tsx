import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'

export default function Carousel({ children }) {
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        '640': {
          slidesPerView: 1,
          spaceBetween: 40
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20
        },
        '1000': {
          slidesPerView: 3,
          spaceBetween: 40
        },
        '1250': {
          slidesPerView: 3,
          spaceBetween: 50
        },
        '1420': {
          slidesPerView: 8,
          spaceBetween: 50
        }
      }}
      className="py-8"
    >
      {children}
    </Swiper>
  )
}
