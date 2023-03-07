import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import 'swiper/css/navigation'

export default function EpisodesCarousel({ children }) {
  return (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center gap-2">
          <h1 className="text-[20px] md:text-[32px] font-outfit">Episodes</h1>
          <select className="outline-none bg-black text-zinc-300 py-1 px-4 rounded">
            <option disabled>Season 1</option>
            <option>Season 2</option>
            <option>Season 3</option>
          </select>
        </div>
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
              slidesPerView: 6,
              spaceBetween: 50
            }
          }}
          className="py-8"
        >
          {children}
        </Swiper>
      </div>
    </div>
  )
}
