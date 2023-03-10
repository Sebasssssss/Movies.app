import React from 'react'
import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'

function Carousel({ children, slidesPerView }) {
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
          slidesPerView: 1,
          spaceBetween: 40
        },
        '640': {
          slidesPerView: 2,
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
          slidesPerView: 4,
          spaceBetween: 50
        },
        '1420': {
          slidesPerView: slidesPerView,
          spaceBetween: 50
        }
      }}
      className="py-8"
    >
      {children}
    </Swiper>
  )
}

export default React.memo(Carousel)
