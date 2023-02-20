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
        '320': {
          slidesPerView: 2,
          spaceBetween: 40
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
      className="inline-flex items-center w-full justify-center py-10"
    >
      {children}
    </Swiper>
  )
}
