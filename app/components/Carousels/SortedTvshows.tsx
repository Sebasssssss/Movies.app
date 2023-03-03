'use client'
import { useState, useCallback } from 'react'
import Loader from '../Loader'
import Carousel from '../Carousel'
import Card from '../Card'
import { SwiperSlide } from 'swiper/react'
import { apiTypes } from 'interfaces/movie.d'
import { useDiscover } from '@/hooks/useDiscover'
import { IoChevronDown } from 'react-icons/io5'
import { menuItems } from 'components/MenuItems.d'

export default function SortedTvShows() {
  const [sort, setSort] = useState('popularity.desc')
  const [active, setActive] = useState(false)

  const { movies, loading } = useDiscover({
    category: 'tv',
    sort: sort
  })

  const handleClick = useCallback(() => {
    setActive(v => !v)
  }, [])

  return loading ? (
    <div className="w-full grid place-items-center">
      <Loader />
    </div>
  ) : (
    <div className="w-full p-[16px] lg:p-[64px]">
      <div className="bg-[#161616] p-[32px] rounded-[8px]">
        <div className="py-[16px] w-full flex justify-between items-center">
          <h1 className="text-[20px] md:text-[32px] font-outfit">Tv shows</h1>
          <div className="relative group">
            <button
              onClick={handleClick}
              className="py-[8px] px-[16px] md:py-[15px] md:px-[30px] font-outfit bg-primary inline-flex items-center gap-1 rounded-[8px] text-[20px] hover:bg-primary/70 active:scale-[0.95] transition-all duration-300"
            >
              Sort by <IoChevronDown className="mt-0.5" />
            </button>
            <ul
              className={`${
                active
                  ? 'visible translate-x-0 scale-100 opacity-100'
                  : 'invisible -translate-y-32 scale-0 opacity-0'
              } w-full flex bg-white flex-col absolute gap-1 -bottom-[280px] z-10 rounded-[4px] p-1 font-outfit text-sm transition-all duration-300`}
            >
              {menuItems.map(item => (
                <li
                  key={item.id}
                  onClick={() => setSort(item.id)}
                  className="w-full cursor-pointer text-zinc-900 px-4 p-1 hover:bg-gray-300 transition-colors duration-200 rounded-[4px]"
                >
                  {item.label}{' '}
                  <span className="text-xs uppercase">({item.sort})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
      </div>
    </div>
  )
}
